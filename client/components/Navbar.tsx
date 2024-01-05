'use client';

import Link from 'next/link';
import { navLists } from '@/lib/navLists';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      {navLists.map((list) => (
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
                <div className="w-[24px] mx-5">{item.icon}</div>
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
