import React from 'react';
import { TextInputWrapper, LabelComponent, InputComponent } from './styles';

interface TextInputProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  disabled,
}) => {
  return (
    <TextInputWrapper>
      <LabelComponent htmlFor={name}>{label}</LabelComponent>
      <InputComponent
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
        disabled={disabled}
      />
    </TextInputWrapper>
  );
};

export default TextInput;
