import React from 'react';
import { CardContentProps } from './Card.types';

const CardContent: React.FC<CardContentProps> = (props) => {
  return <div className="p-5">{props.children}</div>;
};

export default CardContent;
