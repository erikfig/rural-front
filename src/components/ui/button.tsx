import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  color: 'yellow' | 'red' | 'blue' | 'gray';
  title?: string;
  disabled?: boolean;
}

const Button = ({ onClick, children, color, title, disabled }: ButtonProps) => {
  const colorClasses = {
    yellow: 'bg-yellow-500 text-white',
    red: 'bg-red-500 text-white',
    blue: 'bg-blue-500 text-white',
    gray: 'bg-gray-500 text-white',
  };

  const hoverClasses = {
    yellow: 'hover:bg-yellow-600',
    red: 'hover:bg-red-600',
    blue: 'hover:bg-blue-600',
    gray: 'hover:bg-gray-600',
  };

  return (
    <button
      className={`flex items-center gap-1 px-2 py-1 rounded transition-colors duration-300 ${colorClasses[color]} ${hoverClasses[color]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
