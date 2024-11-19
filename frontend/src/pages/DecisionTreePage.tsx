import { useState, ChangeEvent } from 'react';
import { predictLoanEligibility } from '../api';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Select from '../components/ui/Select';
import GoBack from '../components/ui/GoBack';

interface formDataTypes {
  creditScore: number;
  annualIncome: number;
  loanAmountRequested: number;
  loanHistory: string;
  numberOfDependents: number;
  loanTenureRequested: number;
}

export default function DecisionTreePage() {
  const [creditScore, setCreditScore] = useState<number>(0);
  const [annualIncome, setAnnualIncome] = useState<number>(0);
  const [loanAmountRequested, setLoanAmountRequested] = useState<number>(0);
  const [loanHistory, setLoanHistory] = useState<string>('');
  const [numberOfDependents, setNumberOfDependents] = useState<number>(0);
  const [loanTenureRequested, setLoanTenureRequested] = useState<number>(0);
  const [eligibility, setEligibility] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const formData: formDataTypes = {
    creditScore,
    annualIncome,
    loanAmountRequested,
    loanHistory,
    numberOfDependents,
    loanTenureRequested,
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    const result = await predictLoanEligibility(formData);
    setEligibility(result);
    setLoading(false);
  };

  // Handlers for input changes
  const handleCreditScoreChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCreditScore(Number(e.target.value));
  const handleAnnualIncomeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAnnualIncome(Number(e.target.value));
  const handleLoanAmountChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLoanAmountRequested(Number(e.target.value));
  const handleLoanHistoryChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setLoanHistory(e.target.value);
  const handleDependentsChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberOfDependents(Number(e.target.value));
  const handleTenureChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLoanTenureRequested(Number(e.target.value));

  const loanHistoryOptions = [
    { label: 'Paid', value: 'Paid' },
    { label: 'Defaulted', value: 'Defaulted' },
  ];


  return (
    <div className="text-white  p-6">
      <GoBack />
      <Card>
        <h1 className="text-2xl font-semibold mb-6">Predict Loan Eligibility</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Credit Score"
            type="number"
            name="creditScore"
            placeholder="Enter your credit score"
            onChange={handleCreditScoreChange}
            required
          />
          <Input
            label="Annual Income"
            type="number"
            name="annualIncome"
            placeholder="Enter your Annual Income"
            onChange={handleAnnualIncomeChange}
            required
          />
          <Input
            label="Loan Amount Requested"
            type="number"
            name="loanAmountRequested"
            placeholder="Enter your Loan Amount Requested"
            onChange={handleLoanAmountChange}
            required
          />
          <Select
            label="Choose an option"
            options={loanHistoryOptions}
            onChange={handleLoanHistoryChange}
            required
          />
          <Input
            label="Number of Dependents"
            type="number"
            name="numberOfDependents"
            placeholder="Enter your number of dependents"
            onChange={handleDependentsChange}
            required
          />
          <Input
            label="Loan Tenure Requested (years)"
            type="number"
            name="loanTenureRequested"
            placeholder="Enter your loan tenure requested"
            onChange={handleTenureChange}
            required
          />
          <Button
            label={loading ? "Loading..." : "Predict Eligibility"}
            color="bg-[#06402B]"
            onClick={handleSubmit}
          />
        </form>
        {eligibility && <div>Predicted Eligibility: {eligibility}</div>}
      </Card>
    </div>
  );
}
