import { SideBarProps } from '@/types';

const SideBar = ({ children, position }: SideBarProps) => {
  return (
    <aside
      className={`fixed w-[var(--sidebar-width)] top-[var(--header-height)] bottom-0 transition-all bg-darkSecondary
        ${
          position === 'left'
            ? '-left-[var(--sidebar-width)] xl:left-0'
            : '-right-[var(--sidebar-width)] xl:right-0'
        }
      `}
    >
      <div className="">{children}</div>
    </aside>
  );
};

export default SideBar;
