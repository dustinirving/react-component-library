import React from 'react';
import styles from './Card.module.css';
export interface CardProps {
  children: React.ReactNode;
}
export interface CardContentProps {
  children: React.ReactNode;
}
export interface CardMediaProps {
  image: string;
}
export interface CardTitleProps {
  children: React.ReactNode;
}
export interface CardParagraphProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

const CardContent: React.FC<CardContentProps> = (props) => {
  return <div className={styles.cardContent}>{props.children}</div>;
};

const CardMedia: React.FC<CardMediaProps> = (props) => {
  return <img className={styles.cardMedia} src={props.image} />;
};

const CardParagraph: React.FC<CardParagraphProps> = (props) => {
  return <p className={styles.cardParagraph}>{props.children}</p>;
};

const CardTitle: React.FC<CardTitleProps> = (props) => {
  return <h5 className={styles.cardTitle}>{props.children}</h5>;
};

export default Object.assign(Card, {
  Content: CardContent,
  Media: CardMedia,
  Paragraph: CardParagraph,
  Title: CardTitle,
});
