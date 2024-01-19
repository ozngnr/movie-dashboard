'use client';

import { useNavContext } from '@/context/navContext';
import SearchBar from './SearchBar';
import Logo from './Logo';
import { Menu, User } from 'lucide-react';

const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useNavContext();

  return (
    <header
      className={`flex-between sticky top-0 inset-x-0 h-[var(--header-height)] px-5 z-[1000] bg-darkSecondary`}
    >
      <div className="flex">
        <button
          className="xl:hidden mr-3"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu strokeWidth={1.5} size={28} />
        </button>
        <Logo />
      </div>

      <div className="w-full max-w-[500px] mx-5">
        <SearchBar />
      </div>

      <button type="button">
        <User strokeWidth={1.5} />
      </button>
    </header>
  );
};

export default Header;
