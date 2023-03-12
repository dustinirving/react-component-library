import { Tooltip } from './Tooltip';
import React from 'react';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

export function Overview(args) {
  return (
    <div className="m-10">
      <Tooltip {...args}>
        <div className="cursor-pointer dark:text-white">Hover Me</div>
      </Tooltip>
    </div>
  );
}

Overview.args = {
  position: 'bottom',
  text: 'Tooltip',
};
