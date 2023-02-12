import React from 'react';
import { CardTitleProps } from './Card.types';

const CardTitle: React.FC<CardTitleProps> = (props) => {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.children}
    </h5>
  );
};

export default CardTitle;
