import React from 'react';
import { ButtonComponent } from './styles';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color: 'yellow' | 'red' | 'blue' | 'gray';
  title?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ onClick, children, color, title, disabled, type = 'button' }: ButtonProps) => {
  return (
    <ButtonComponent
      onClick={onClick}
      title={title}
      color={color}
      disabled={disabled}
      type={type}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
