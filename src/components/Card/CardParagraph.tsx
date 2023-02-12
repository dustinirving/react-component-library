import React from 'react';
import { CardParagraphProps } from './Card.types';

const CardParagraph: React.FC<CardParagraphProps> = (props) => {
  return <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.children}</p>;
};

export default CardParagraph;
