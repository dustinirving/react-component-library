import React from 'react';
import { Card, CardMedia, CardContent, CardTitle, CardParagraph } from './index.js';

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
