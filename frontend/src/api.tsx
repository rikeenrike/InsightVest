import axios from 'axios';

interface LoanEligibilityData {
  creditScore: number;
  annualIncome: number;
  loanAmountRequested: number;
  loanHistory: string;
  numberOfDependents: number;
  loanTenureRequested: number;
}

// export const fetchMessage = async () => {
//   const response = await axios.get('http://127.0.0.1:5000/');
//   return response.data.message;
// };

export const predictLoanEligibility = async (data: LoanEligibilityData) => {
  const response = await axios.post('https://insight-vest-rho.vercel.app/predict_loan_eligibility', data);
  console.log(response.data);
  return response.data.predicted_eligibility;
};