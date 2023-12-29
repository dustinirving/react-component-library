import Timeline from './Timeline';
import React from 'react';

export default {
  title: 'Timeline',
  component: Timeline,
};

export function Overview() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Time>February 2022</Timeline.Time>
        <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
        <Timeline.Paragraph>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
          and pre-order E-commerce & Marketing pages.
        </Timeline.Paragraph>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Time>March 2022</Timeline.Time>
        <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
        <Timeline.Paragraph>
          All of the pages and components are first designed in Figma and we keep a parity between
          the two versions even as we update the project.
        </Timeline.Paragraph>
      </Timeline.Item>
    </Timeline>
  );
}
