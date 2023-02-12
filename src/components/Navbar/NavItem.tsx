import React from 'react';
import { NavItemProps } from './Navbar.types';
import classNames from 'classnames';

const NavItem: React.FC<NavItemProps> = (props) => {
  const { href, text, active } = props;
  const anchorClass = classNames('block py-2 pl-3 pr-4 rounded md:p-0', {
    'text-gray-700 dark:text-gray-400 md:hover:text-sky-700 md:dark:hover:text-white dark:hover:text-white':
      !active,
    'text-sky-700 dark:text-white': active,
  });
  return (
    <li>
      <a href={href} className={anchorClass} data-active={active}>
        {text}
      </a>
    </li>
  );
};

export default NavItem;
