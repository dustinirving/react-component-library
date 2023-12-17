import React from 'react';
import styles from './Link.module.css';
export interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {}

export function Link(props: LinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer" className={styles.link}>
      {props.children}
    </a>
  );
}
