'use client';

import { NavProps } from '@/types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

const menu = (
  <ul>
    <li>
      <Link href="/">dashboard</Link>
    </li>
    <li>
      <Link href="/favourites">favourites</Link>
    </li>
    <li>wishlist</li>
    <li>saved</li>
  </ul>
);

const sideVariants = {
  open: { x: 300, transition: { duration: 0.2 } },
  closed: { x: 0, transition: { duration: 0.2 } },
};

const Nav = ({ isOpen, setIsOpen }: NavProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setIsOpen]);

  return (
    <>
      {/* desktop side nav */}
      <nav className="hidden lg:block sticky top-0 w-[300px] h-screen border border-solid border-red-600 z-50">
        {menu}
      </nav>

      {/* mobile side nav */}
      <nav className="lg:hidden">
        {/* backdrop */}
        <motion.div
          className={`fixed inset-0 bg-slate-950/50 opacity-0 z-0 ${
            !isOpen && 'pointer-events-none'
          }`}
          animate={{ opacity: isOpen ? '1' : '0' }}
          onTap={() => setIsOpen(false)}
        />
        <motion.div
          className={`fixed bg-slate-900 inset-y-0 right-full w-[300px] p-5 z-10`}
          animate={isOpen ? 'open' : 'closed'}
          variants={sideVariants}
        >
          <button onClick={() => setIsOpen(false)} className="float-right">
            <XMarkIcon width={20} />
          </button>
          {menu}
        </motion.div>
      </nav>
    </>
  );
};

export default Nav;
