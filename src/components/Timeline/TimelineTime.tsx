import React from 'react';

export interface TimelineTimeProps {
  children: React.ReactNode;
}

export function TimelineTime(props: TimelineTimeProps) {
  return (
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {props.children}
    </time>
  );
}
