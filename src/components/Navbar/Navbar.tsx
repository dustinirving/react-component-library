import classNames from 'classnames';
import React, { useState } from 'react';
import { NavBarProps } from './Navbar.types';
import NavItem from './NavItem';

const Navbar: React.FC<NavBarProps> = (props) => {
  const { navItems, position, children } = props;
  const [navItemsHidden, setNavItemsHidden] = useState(true);
  const navItemsWrapperClass = classNames('items-center justify-between w-full md:flex md:w-auto', {
    hidden: navItemsHidden,
  });
  const childrenClass = classNames({ 'md:order-2': position === 'left' });
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full border-b border-gray-200 dark:border-none">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setNavItemsHidden(!navItemsHidden)}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
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
        <div className={childrenClass}>{children}</div>
        <div className={navItemsWrapperClass}>
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map(({ text, href, active = false }) => (
              <NavItem text={text} href={href} active={active} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
