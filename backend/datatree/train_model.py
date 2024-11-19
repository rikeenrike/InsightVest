import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import LabelEncoder
import pickle

# Load dataset
data = pd.read_csv('loan_eligibility_data.csv')  # Ensure the file is in the same directory

# Preprocessing: Encode categorical data
label_encoders = {}
for column in ['Eligibility', 'Loan History']:
    le = LabelEncoder()
    data[column] = le.fit_transform(data[column])
    label_encoders[column] = le

# Features and target variable
X = data.drop(columns=['Name', 'Eligibility'])
y = data['Eligibility']

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = DecisionTreeClassifier(random_state=42)
model.fit(X_train, y_train)

# Save the trained model as a .pkl file
with open('loan_eligibility_model.pkl', 'wb') as model_file:
    pickle.dump(model, model_file)

# Save label encoders for later use
with open('label_encoders.pkl', 'wb') as encoder_file:
    pickle.dump(label_encoders, encoder_file)

print("Model and label encoders saved successfully!")