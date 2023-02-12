import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, type, ...htmlButtonProps } = props;
  return (
    <button
      {...htmlButtonProps}
      className={`p-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
