import React from 'react';

interface TextInputProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        required={required}
      />
    </div>
  );
};

export default TextInput;
