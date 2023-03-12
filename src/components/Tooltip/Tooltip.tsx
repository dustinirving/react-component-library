import classNames from 'classnames';
import React, { useState } from 'react';

export interface TooltipProps {
  children: React.ReactNode;
  position?: 'top' | 'bottom';
  text: string;
}

export function Tooltip(props: TooltipProps) {
  const { children, position, text } = props;
  const [isVisible, setIsVisible] = useState(false);
  const bottomPosition = position === 'bottom';
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div
        className={classNames(
          `before:content-[' '] absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-2 py-1 text-sm font-medium text-white shadow-sm transition-opacity duration-300 before:pointer-events-none before:absolute before:left-[calc(50%-6px)] before:h-0 before:w-0 before:border-[6px] before:border-transparent before:text-white dark:bg-gray-700`,
          {
            'invisible opacity-0': !isVisible,
            'bottom-[calc(100%+9px)] before:top-full before:border-t-gray-900 dark:before:border-t-gray-700':
              !bottomPosition,
            'top-[calc(100%+9px)] before:bottom-full before:border-b-gray-900 dark:before:border-b-gray-700':
              bottomPosition,
          },
        )}
      >
        {text}
      </div>
    </div>
  );
}

Tooltip.defaultProps = {
  position: 'bottom',
};

export default Tooltip;
