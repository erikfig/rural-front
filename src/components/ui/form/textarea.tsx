import React from 'react';
import { TextAreaWrapper, TextAreaComponent, LabelComponent } from './styles';

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
    <TextAreaWrapper>
      <LabelComponent htmlFor={name}>{label}</LabelComponent>
      <TextAreaComponent
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </TextAreaWrapper>
  );
};

export default TextArea;
