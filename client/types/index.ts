export type SideBarProps = {
  children?: React.ReactNode;
  position: 'left' | 'right';
};
export type NavContextProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
