interface ButtonProps {
  label: string;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ label, color = 'bg-blue-500', onClick }: ButtonProps) {
  return (
    <button
      className={`w-full py-2 px-4 border border-black2 text-white rounded-lg focus:outline-none ${color}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}