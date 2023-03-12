import React from 'react';

export interface TimelineProps {
  children: React.ReactNode;
}

export function Timeline(props: TimelineProps) {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">{props.children}</ol>
  );
}
