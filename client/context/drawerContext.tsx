'use client';

import { DrawerProps } from '@/types';
import { usePathname } from 'next/navigation';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const defaultValues: DrawerProps = {
  isOpen: false,
  setIsOpen: () => {},
};
const DrawerContext = createContext<DrawerProps>(defaultValues);

export const DrawerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen, pathname]);

  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

export const useDrawerContext = () => useContext(DrawerContext);
