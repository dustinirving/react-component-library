import React, { useState } from 'react';
import styles from './Navbar.module.css';
export interface NavbarItem {
  href: string;
  text: string;
  id: string;
  handleClick: () => void;
}
export interface NavbarProps {
  navItems: NavbarItem[];
  children?: React.ReactNode;
  activeItemId: string;
  fixed?: boolean;
}
export interface NavItemProps extends NavbarItem {
  active: boolean;
}
export interface NavItemsProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { children, fixed } = props;
  const [navItemsHidden, setNavItemsHidden] = useState(true);
  return (
    <nav className={`${styles.navbar} ${fixed ? styles.fixedNavbar : ''}`}>
      <div className={styles.container}>
        <div className={styles.menuButton}>
          <button type="button" onClick={() => setNavItemsHidden(!navItemsHidden)}>
            <span className="sr-only">Open main menu</span>
            <svg
              className={styles.menuIcon}
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
        <div className={`${styles.navItemsWrapper} ${navItemsHidden ? styles.hidden : ''}`}>
          {children}
        </div>
      </div>
    </nav>
  );
};

const NavItems: React.FC<NavItemsProps> = (props) => {
  return <ul className={styles.navItems}>{props.children}</ul>;
};

const NavItem: React.FC<NavItemProps> = (props) => {
  const { href, text, active, id, handleClick } = props;
  return (
    <li key={id} onClick={handleClick}>
      <a
        href={href}
        className={`${styles.navItemLink} ${active ? styles.active : ''}`}
        data-active={active}
      >
        {text}
      </a>
    </li>
  );
};

export default Object.assign(Navbar, { Item: NavItem, Items: NavItems });
