export type SideBarProps = {
  children?: React.ReactNode;
  position: 'left' | 'right';
};
export type DrawerProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
