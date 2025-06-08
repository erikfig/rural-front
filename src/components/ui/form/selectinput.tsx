import React from 'react';
import { TextInputWrapper, LabelComponent, InputComponent } from './styles';

interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  disabled,
}) => {
  return (
    <TextInputWrapper>
      <LabelComponent htmlFor={name}>{label}</LabelComponent>
      <InputComponent
        as="select"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </InputComponent>
    </TextInputWrapper>
  );
};

export default SelectInput;
