'use client';

import { useEffect, useState } from 'react';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import SearchBar from './SearchBar';
import Drawer from './Drawer';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen, pathname]);

  return (
    <header
      className={`flex-between sticky top-0 inset-x-0 h-[var(--header-height)] px-5 `}
    >
      {/* Mobile Navigation */}
      {/* <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <Drawer open={isOpen} setOpen={setIsOpen} />

      <button type="button" onClick={() => setIsOpen(true)}>
        <Bars3Icon width={30} />
      </button>

      <SearchBar />

      <button type="button" className="w-8">
        <UserCircleIcon />
      </button>
    </header>
  );
};

export default Header;
