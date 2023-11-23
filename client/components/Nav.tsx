'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Search from './Search';
import { Bars3Icon } from '@heroicons/react/24/outline';

const menu = (
  <ul>
    <li>dashboard</li>
    <li>favourites</li>
    <li>wishlist</li>
    <li>saved</li>
  </ul>
);

const sideVariants = {
  open: { x: 300, transition: { duration: 0.2 } },
  closed: { x: 0, transition: { duration: 0.2 } },
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="w-full fixed flex p-3 justify-between items-center">
        <button type="button">
          <Bars3Icon width={30} height={30} />
        </button>
        {/* searchbar */}
        <Search />
        <div>hello </div>
      </div>
      {/* desktop side nav */}
      <nav className="hidden">{menu}</nav>

      {/* mobile side nav */}
      <nav className="">
        {/* backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-950/50 opacity-0 z-0 pointer-events-none"
          animate={{ opacity: isOpen ? '1' : '0' }}
          onTap={() => setIsOpen(false)}
        />
        <motion.div
          className={`fixed bg-slate-800 inset-y-0 right-full w-[300px] p-5 z-10`}
          animate={isOpen ? 'open' : 'closed'}
          variants={sideVariants}
        >
          <button onClick={() => setIsOpen(false)}>close</button>
          {menu}
        </motion.div>
      </nav>
    </>
  );
};

export default Nav;
