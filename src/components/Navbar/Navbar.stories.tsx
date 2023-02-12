import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

const navItems = [
  { text: 'About', href: '#about', active: true },
  { text: 'Experience', href: '#experience' },
  { text: 'Projects', href: '#projects' },
  { text: 'Education', href: '#education' },
];

export const Left = () => <Navbar navItems={navItems} position="left" />;
export const Right = () => <Navbar navItems={navItems} position="right" />;
