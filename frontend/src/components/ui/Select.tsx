interface SelectProps {
    label: string;
    options: { label: string; value: string }[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    name?: string;
    id?: string;
    className?: string;
    }


export default function Select({ label, options, onChange, required, name, id, className }: SelectProps) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="text-sm font-semibold text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        onChange={onChange}
        required={required}
        name={name}
        id={id}
        className={`w-full py-2 px-4 border border-black2 bg-black3 text-white rounded-lg focus:outline-none focus:border-blue-500 ${className}`}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}