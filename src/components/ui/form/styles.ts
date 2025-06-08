import styled from 'styled-components';

export const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LabelComponent = styled.label`
  font-weight: 500;
`;

export const InputComponent = styled.input`
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  -webkit-appearance: none;
  height: 35px;
  &:focus {
    outline: none;
    border-color: #7f9356;
    box-shadow: 0 0 0 2px rgba(127, 147, 86, 0.5);
  }
  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TextAreaComponent = styled.textarea`
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #7f9356;
    box-shadow: 0 0 0 2px rgba(127, 147, 86, 0.5);
  }
`;

export const ErrorComponent = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 8px;
`;
