import { IconButton } from './';
import React from 'react';

export default {
  title: 'IconButton',
  component: IconButton,
};

export const Overview = () => {
  return (
    <IconButton type="icon">
      <svg
        className="h-[1.125rem] w-[1.125rem]"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>
    </IconButton>
  );
};
