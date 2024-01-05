'use client';

import useScreenSize from '@/hooks/useScreenSize';
import { NavContextProps } from '@/types';
import { usePathname } from 'next/navigation';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const defaultValues: NavContextProps = {
  isOpen: false,
  setIsOpen: () => {},
};
const NavContext = createContext<NavContextProps>(defaultValues);

export const NavContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen, pathname]);

  return (
    <NavContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
