import React from 'react';
export interface CardTitleProps {
  children: React.ReactNode;
}

export function CardTitle(props: CardTitleProps) {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.children}
    </h5>
  );
}
