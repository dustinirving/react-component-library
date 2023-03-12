import React from 'react';

export interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {}

export function Link(props: LinkProps) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer font-medium text-sky-700 hover:text-sky-500 dark:text-sky-500 hover:dark:text-sky-600"
    >
      {props.children}
    </a>
  );
}
