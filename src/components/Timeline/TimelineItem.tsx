import React from 'react';

export interface TimelineItemProps {
  children: React.ReactNode;
}

export function TimelineItem(props: TimelineItemProps) {
  return (
    <li className="ml-4 [&:not(:last-child)]:mb-10">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      {props.children}
    </li>
  );
}
