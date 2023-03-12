import React from 'react';
export interface CardProps {
  children: React.ReactNode;
}

export function Card(props: CardProps) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-900">
      {props.children}
    </div>
  );
}
