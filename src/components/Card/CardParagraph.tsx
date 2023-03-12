import React from 'react';
export interface CardParagraphProps {
  children: React.ReactNode;
}

export function CardParagraph(props: CardParagraphProps) {
  return <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.children}</p>;
}
