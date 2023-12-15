export type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
export type SideBarProps = {
  children?: React.ReactNode;
  position: 'left' | 'right';
};
export type DrawerProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
