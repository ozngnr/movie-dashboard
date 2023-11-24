'use client';

import { Bars3Icon, UserIcon } from '@heroicons/react/24/outline';
import SearchBar from './SearchBar';
import Nav from './Nav';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="w-screen fixed top-0 inset-x-0 flex h-20 px-5 justify-between lg:justify-end items-center border border-solid border-orange-600">
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Bars3Icon width={30} />
        </button>

        <div className="w-[75%] max-w-2xl lg:hidden">
          <SearchBar />
        </div>

        <UserIcon width={24} />
      </div>
    </>
  );
};

export default Header;
