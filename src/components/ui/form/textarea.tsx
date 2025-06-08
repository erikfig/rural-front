import React from 'react';

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium" htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 border rounded"
        required={required}
      />
    </div>
  );
};

export default TextArea;
