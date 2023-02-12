export interface NavItemProps {
  href: string;
  text: string;
  active?: boolean;
}

export interface NavBarProps {
  navItems: NavItemProps[];
  position?: 'center' | 'left' | 'right';
  children?: React.ReactNode;
}
