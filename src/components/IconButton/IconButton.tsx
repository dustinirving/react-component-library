import React from 'react';

export interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export function IconButton(props: IconButtonProps) {
  const { children, className, ...htmlButtonProps } = props;
  return (
    <button
      {...htmlButtonProps}
      type="button"
      className={`rounded-lg bg-white p-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500 ${className}`}
    >
      {children}
    </button>
  );
}
