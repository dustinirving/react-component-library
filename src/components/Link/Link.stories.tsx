import { Link } from './';
import React from 'react';

export default {
  title: 'Link',
  component: Link,
};

export function Overview() {
  return (
    <Link target="_blank" rel="noopener noreferrer" href="https://solink.com/">
      Click Me
    </Link>
  );
}
