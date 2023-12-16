import React from 'react';
import classNames from 'classnames';
import { NavbarItem } from './Navbar';
export interface NavItemProps extends NavbarItem {
  active: boolean;
}

export function NavItem(props: NavItemProps) {
  const { href, text, active, id, handleClick } = props;
  return (
    <li key={id} onClick={handleClick}>
      <a
        href={href}
        className={classNames(
          'block rounded py-2 pl-3 pr-4 font-semibold transition-colors duration-100 ease-linear md:p-0',
          {
            'text-gray-500 dark:text-gray-400 dark:hover:text-white md:hover:text-sky-700 md:dark:hover:text-white':
              !active,
            'text-sky-700 dark:text-white': active,
          },
        )}
        data-active={active}
      >
        {text}
      </a>
    </li>
  );
}

export default NavItem;
