import { useNavigate } from 'react-router-dom';

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="text-white text-sm font-semibold bg-black2 px-4 py-2 rounded-lg focus:outline-none"
    >
      Go Back
    </button>
  );
}