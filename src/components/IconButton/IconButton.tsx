import React from 'react';
import styles from './IconButton.module.css';

export interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { children, className, ...htmlButtonProps } = props;
  return (
    <button {...htmlButtonProps} type="button" className={`${styles.iconButton} ${className}`}>
      {children}
    </button>
  );
};

export default IconButton;
