'use client';

import { MobileNavProps } from '@/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLists } from '@/utils/navLists';

const menu = {
  hidden: { x: 0, transition: { duration: 0.2 } },
  show: { x: 300, transition: { duration: 0.2 } },
};

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setIsOpen]);

  const pathname = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen, pathname]);

  return (
    <div className="fixed z-[100] lg:hidden">
      {/* backdrop */}
      <motion.div
        className={`fixed inset-0 bg-neutral-950/50 opacity-0 z-9 ${
          !isOpen && 'pointer-events-none'
        }`}
        animate={isOpen ? 'show' : 'hidden'}
        variants={backdrop}
        onTap={() => setIsOpen(false)}
      />
      <motion.nav
        className={`fixed bg-neutral-950 inset-y-0 right-full w-[300px] p-5 z-10`}
        animate={isOpen ? 'show' : 'hidden'}
        variants={menu}
      >
        <Nav />
      </motion.nav>
    </div>
  );
};

const Nav = () => {
  const [activeTab, setActiveTab] = useState('/');

  return (
    <nav className={``}>
      {navLists.map((list) => (
        <ul key={list.name} className="mb-4">
          <span className="inline-block mb-4 uppercase text-xs">
            {list.name}
          </span>
          {list.items.map((item) => (
            <li
              key={item.name}
              className={`
                ${activeTab === item.href && 'text-lightPrimary'} 
                hover:text-accent 
                transition-colors mb-5
                border-r-2
                border-accent
              `}
            >
              <Link
                href={item.href}
                className="flex items-center"
                onClick={() => setActiveTab(item.href)}
              >
                <div className="w-5 mr-4">{item.icon}</div>
                {item.name}
              </Link>
            </li>
          ))}
          <hr className="border-lightSecondary opacity-20" />
        </ul>
      ))}
    </nav>
  );
};

export default Nav;
