
import json
import pandas as pd
import pickle
from http.server import BaseHTTPRequestHandler

# Load the trained model
with open('../models/loan_eligibility_model.pkl', 'rb') as model_file:
    loaded_model = pickle.load(model_file)

# Load the label encoders
with open('../models/label_encoders.pkl', 'rb') as encoder_file:
    label_encoders = pickle.load(encoder_file)

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)

        # Map the new keys to the expected keys
        mapped_data = {
            "Credit Score": data['creditScore'],
            "Annual Income": data['annualIncome'],
            "Loan Amount Requested": data['loanAmountRequested'],
            "Loan History": data['loanHistory'],
            "Number of Dependents": data['numberOfDependents'],
            "Loan Tenure Requested (years)": data['loanTenureRequested']
        }

        # Preprocess the input data
        input_df = pd.DataFrame([mapped_data])
        input_df['Loan History'] = label_encoders['Loan History'].transform(input_df['Loan History'])

        # Predict eligibility
        eligibility_prediction = loaded_model.predict(input_df)
        eligibility_label = label_encoders['Eligibility'].inverse_transform(eligibility_prediction)

        # Send response
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps({"eligibility": eligibility_label[0]}).encode())