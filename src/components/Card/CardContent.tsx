import React from 'react';
export interface CardContentProps {
  children: React.ReactNode;
}

export function CardContent(props: CardContentProps) {
  return <div className="p-5">{props.children}</div>;
}
