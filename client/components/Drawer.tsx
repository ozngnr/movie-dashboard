'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useNavContext } from '@/context/navContext';
import { ReactNode } from 'react';
import Logo from './Logo';

const Drawer = ({ children }: { children: ReactNode }) => {
  const { isOpen, setIsOpen } = useNavContext();

  const drawer = {
    closed: { x: 0, transition: { duration: 0.2 } },
    open: { x: 240, transition: { duration: 0.2 } },
  };

  return (
    <div className="drawer xl:hidden fixed inset-0 pointer-events-none z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="drawer-mask absolute inset-0 bg-black bg-opacity-40 z-[1000] pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTap={() => setIsOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="drawer-content-wrapper absolute -left-[var(--sidebar-width)] top-0 h-screen bg-darkPrimary w-[var(--sidebar-width)] z-[1000] pointer-events-auto"
        animate={isOpen ? 'open' : 'closed'}
        variants={drawer}
      >
        <div className="h-[var(--header-height)] px-3 flex items-center">
          <Logo />
        </div>
        {children}
      </motion.div>
    </div>
  );
};

export default Drawer;
