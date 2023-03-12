import React from 'react';

export interface TimelineParagraphProps {
  children: React.ReactNode;
}

export function TimelineParagraph(props: TimelineParagraphProps) {
  return (
    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{props.children}</p>
  );
}
