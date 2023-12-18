'use client';

import { useContext, useEffect, useState } from 'react';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import SearchBar from './SearchBar';
import Drawer from './Drawer';
import { usePathname } from 'next/navigation';
import { useDrawerContext } from '@/context/drawerContext';
import Logo from './Logo';
import useScreenSize from '@/hooks/useScreenSize';

const Header: React.FC = () => {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useDrawerContext();
  const { width } = useScreenSize();

  console.log(width);

  const handleNavigation = () => {
    return width > 1024 ? console.log('open mini guide') : setIsOpen(true);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen, pathname]);

  return (
    <header
      className={`flex-between sticky top-0 inset-x-0 h-[var(--header-height)] px-5 `}
    >
      {/* Mobile Navigation */}
      {/* <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      {/* <Drawer open={isOpen} setOpen={setIsOpen} /> */}

      <div className="flex">
        <button className="mr-3" type="button" onClick={handleNavigation}>
          <Bars3Icon width={30} />
        </button>
        <Logo />
      </div>

      <SearchBar />

      <button type="button" className="w-8">
        <UserCircleIcon />
      </button>
    </header>
  );
};

export default Header;
