import React from 'react';
import styles from './IconButton.module.css';
export interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export function IconButton(props: IconButtonProps) {
  const { children, className, ...htmlButtonProps } = props;
  return (
    <button
      {...htmlButtonProps}
      type="button"
      className={`text-gray-700 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500 ${styles['icon-button']} ${className} `}
    >
      {children}
    </button>
  );
}
