'use client';

import { useNavContext } from '@/context/navContext';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import SearchBar from './SearchBar';
import Logo from './Logo';

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
          <Bars3Icon width={30} />
        </button>
        <Logo />
      </div>

      <div className="w-full max-w-[500px] mx-5">
        <SearchBar />
      </div>

      <button type="button">
        <UserCircleIcon width={32} />
      </button>
    </header>
  );
};

export default Header;
