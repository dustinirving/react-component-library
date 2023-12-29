import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './Tooltip.module.css';
export interface TooltipProps {
  children: React.ReactNode;
  position?: 'top' | 'bottom';
  text: string;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children, position = 'bottom', text } = props;
  const [isVisible, setIsVisible] = useState(false);
  const positionClass = position === 'bottom' ? styles.topTooltip : styles.bottomTooltip;
  const visibilityClass = isVisible ? '' : styles.invisibleTooltip;

  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div className={`${styles.tooltipBase} ${positionClass} ${visibilityClass}`}>{text}</div>
    </div>
  );
};
