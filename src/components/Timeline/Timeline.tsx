import React from 'react';
import styles from './Timeline.module.css';
export interface TimelineProps {
  children: React.ReactNode;
}
export interface TimelineItemProps {
  children: React.ReactNode;
}
export interface TimelineParagraphProps {
  children: React.ReactNode;
}
export interface TimelineTimeProps {
  children: React.ReactNode;
}
export interface TimelineTitleProps {
  children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = (props) => {
  return <ol className={styles.timeline}>{props.children}</ol>;
};

const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  return (
    <li className={styles.timelineItem}>
      <div className={styles.timelineDot}></div>
      {props.children}
    </li>
  );
};

const TimelineParagraph: React.FC<TimelineParagraphProps> = (props) => {
  return <p className={styles.timelineParagraph}>{props.children}</p>;
};

const TimelineTime: React.FC<TimelineTimeProps> = (props: TimelineTimeProps) => {
  return <time className={styles.timelineTime}>{props.children}</time>;
};

const TimelineTitle: React.FC<TimelineTitleProps> = (props) => {
  return <h3 className={styles.timelineTitle}>{props.children}</h3>;
};

export default Object.assign(Timeline, {
  Item: TimelineItem,
  Paragraph: TimelineParagraph,
  Time: TimelineTime,
  Title: TimelineTitle,
});
