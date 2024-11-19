import React from 'react';

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
}

export default function Input({ label, type, placeholder, onChange, required, name, id, className }: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="text-sm font-semibold text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        name={name}
        id={id}
        className={`w-full py-2 px-4 border border-black2 bg-black3 text-white rounded-lg focus:outline-none focus:border-blue-500 ${className}`}
      />
    </div>
  );
}