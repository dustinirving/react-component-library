import React from 'react';
import { Navbar } from './';

export default {
  title: 'Navbar',
  component: Navbar,
};

const navItems = [
  { text: 'About', href: '#about', id: 'about', handleClick: () => null },
  { text: 'Experience', href: '#experience', id: 'experience', handleClick: () => null },
  { text: 'Projects', href: '#projects', id: 'projects', handleClick: () => null },
  { text: 'Education', href: '#education', id: 'education', handleClick: () => null },
];

export function Overview(args) {
  return <Navbar {...args} navItems={navItems} />;
}

Overview.args = {
  position: 'left',
  activeItemId: 'about',
};

export const Left = () => <Navbar navItems={navItems} position="left" activeItemId="about" />;
export const Right = () => <Navbar navItems={navItems} position="right" activeItemId="about" />;
