'use client';

import Link from 'next/link';
import { navRoutes } from '@/lib/navRoutes';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      {navRoutes.map((list) => (
        <ul key={list.name} className="mt-5">
          {list.items.map((item) => (
            <li
              key={item.name}
              className={`
              transition-colors 
              mb-5
              border-l-2
              border-l-transparent
              ${pathname === item.href && 'text-lightPrimary border-l-accent'} 
              hover:text-accent 
              `}
            >
              <Link href={item.href} className="flex items-center">
                <span className="w-6 mx-5">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
          <hr className="border-lightSecondary opacity-20 mx-4" />
        </ul>
      ))}
    </nav>
  );
};

export default Navbar;
