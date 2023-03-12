import React from 'react';

export interface TimelineTitleProps {
  children: React.ReactNode;
}

export function TimelineTitle(props: TimelineTitleProps) {
  return <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props.children}</h3>;
}
