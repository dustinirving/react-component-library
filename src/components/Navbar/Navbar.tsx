import classNames from 'classnames';
import React, { useState } from 'react';
import NavItem from './NavItem.js';

export interface NavbarItem {
  href: string;
  text: string;
  id: string;
  handleClick: () => void;
}
export interface NavbarProps {
  navItems: NavbarItem[];
  position?: 'left' | 'right';
  children?: React.ReactNode;
  activeItemId: string;
  fixed?: boolean;
}

export function Navbar(props: NavbarProps) {
  const { navItems, position, children, activeItemId, fixed } = props;
  const [navItemsHidden, setNavItemsHidden] = useState(true);
  return (
    <nav
      className={classNames(
        'w-full border-b border-gray-200 bg-white px-2 py-2 dark:border-none dark:bg-gray-900 sm:px-4',
        { fixed },
      )}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setNavItemsHidden(!navItemsHidden)}
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className={classNames({ 'md:order-2': position === 'left' })}>{children}</div>
        <div
          className={classNames('w-full items-center justify-between md:flex md:w-auto', {
            hidden: navItemsHidden,
          })}
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:font-medium md:dark:bg-gray-900">
            {navItems.map(({ text, href, id, handleClick }) => (
              <NavItem
                text={text}
                href={href}
                active={activeItemId === id}
                id={id}
                handleClick={handleClick}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
