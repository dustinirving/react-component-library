import React from 'react';

export interface CardMediaProps {
  image: string;
}

export function CardMedia(props: CardMediaProps) {
  return <img className="rounded-t-lg" src={props.image} />;
}
