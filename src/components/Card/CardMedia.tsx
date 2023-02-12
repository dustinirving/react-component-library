import React from 'react';
import { CardMediaProps } from './Card.types';

const CardMedia: React.FC<CardMediaProps> = (props) => {
  return <img className="rounded-t-lg" src={props.image} />;
};

export default CardMedia;
