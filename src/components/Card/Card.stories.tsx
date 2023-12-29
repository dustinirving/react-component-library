import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const Overview = () => (
  <Card>
    <Card.Media image="https://flowbite.com/docs/images/blog/image-1.jpg" />
    <Card.Content>
      <Card.Title>Title</Card.Title>
      <Card.Paragraph>Content</Card.Paragraph>
    </Card.Content>
  </Card>
);
