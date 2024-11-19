import axios from 'axios';

interface LoanEligibilityData {
  creditScore: number;
  annualIncome: number;
  loanAmountRequested: number;
  loanHistory: string;
  numberOfDependents: number;
  loanTenureRequested: number;
}

const VERCEL_URL = 'https://insight-vest-rho.vercel.app';

export const fetchMessage = async () => {
  const response = await axios.get(`${VERCEL_URL}/api/`);
  return response.data.message;
};

export const predictLoanEligibility = async (data: LoanEligibilityData) => {
  const response = await axios.post(`${VERCEL_URL}/api/predict_loan_eligibility`, data);
  console.log(response.data);
  return response.data.predicted_eligibility;
};