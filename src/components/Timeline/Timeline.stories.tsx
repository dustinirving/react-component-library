import { Timeline, TimelineItem, TimelineTime, TimelineTitle, TimelineParagraph } from './';
import React from 'react';

export default {
  title: 'Timeline',
  component: Timeline,
};

export function Overview() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineTime>February 2022</TimelineTime>
        <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
        <TimelineParagraph>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
          and pre-order E-commerce & Marketing pages.
        </TimelineParagraph>
      </TimelineItem>
      <TimelineItem>
        <TimelineTime>March 2022</TimelineTime>
        <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
        <TimelineParagraph>
          All of the pages and components are first designed in Figma and we keep a parity between
          the two versions even as we update the project.
        </TimelineParagraph>
      </TimelineItem>
    </Timeline>
  );
}
