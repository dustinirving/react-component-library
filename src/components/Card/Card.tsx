import React from 'react';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
      {props.children}
    </div>
  );
};

export default Card;
