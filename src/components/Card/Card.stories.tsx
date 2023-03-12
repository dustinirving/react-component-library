import React from 'react';
import { Card } from './Card';
import { CardMedia } from './CardMedia';
import { CardContent } from './CardContent';
import { CardTitle } from './CardTitle';
import { CardParagraph } from './CardParagraph';

export default {
  title: 'Card',
  component: Card,
};

export const Overview = () => (
  <Card>
    <CardMedia image="https://flowbite.com/docs/images/blog/image-1.jpg" />
    <CardContent>
      <CardTitle>Title</CardTitle>
      <CardParagraph>Content</CardParagraph>
    </CardContent>
  </Card>
);
