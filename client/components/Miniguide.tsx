'use client';

import { navLists } from '@/utils/navLists';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const Miniguide = () => {
  return (
    <div className="fixed top-[var(--header-height)] left-[0px] h-screen bg-darkPrimary">
      {/* <Navbar /> */}
    </div>
  );
};

export default Miniguide;
