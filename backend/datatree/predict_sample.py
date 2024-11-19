import pandas as pd
import pickle

# Load the trained model
with open('models/loan_eligibility_model.pkl', 'rb') as model_file:
    loaded_model = pickle.load(model_file)

# Load the label encoders
with open('models/label_encoders.pkl', 'rb') as encoder_file:
    label_encoders = pickle.load(encoder_file)

def predict_loan_eligibility(data):
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

    return eligibility_label[0]

# Sample data
sample_data = {
    "creditScore": 700,
    "annualIncome": 0,
    "loanAmountRequested": 20000,
    "loanHistory": "Paid",
    "numberOfDependents": 1,
    "loanTenureRequested": 5
}

# Predict eligibility
eligibility_label = predict_loan_eligibility(sample_data)

print("Predicted Eligibility:", eligibility_label)