from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
from datatree.predict_sample import predict_loan_eligibility

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# # Load the trained model
# with open('linear_regression_model.pkl', 'rb') as file:
#     model = pickle.load(file)

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.get_json()
#     features = [[data['gdp'], data['inflation'], data['interest']]]
#     prediction = model.predict(features)
#     return jsonify({'predicted_stock_price': prediction[0]})

@app.route('/predict_loan_eligibility', methods=['POST'])
def predict_loan_eligibility_endpoint():
    data = request.get_json()
    eligibility = predict_loan_eligibility(data)
    return jsonify({'predicted_eligibility': eligibility})

if __name__ == '__main__':
    app.run(debug=True)