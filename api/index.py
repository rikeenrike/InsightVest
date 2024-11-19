
from flask import Flask, request, jsonify
from flask_cors import CORS
from datatree.predict_sample import predict_loan_eligibility

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/predict_loan_eligibility', methods=['POST'])
def predict_loan_eligibility_endpoint():
    data = request.get_json()
    eligibility = predict_loan_eligibility(data)
    return jsonify({'predicted_eligibility': eligibility})

# Vercel requires the app to be exported as 'app'
if __name__ == '__main__':
    app.run(debug=True)