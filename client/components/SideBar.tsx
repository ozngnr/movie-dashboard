import { SideBarProps } from '@/types';

const SideBar = ({ children, position }: SideBarProps) => {
  // const posClasses =
  //   position === 'left'
  //     ? '-left-[var(--sidebar-width)] lg:left-0'
  //     : '-right-[var(--sidebar-width)] lg:right-0';

  const posClasses = () => {
    return `-${position}-[var(--sidebar-width)] lg:${position}-0`;
  };

  return (
    <aside
      className={`
        fixed 
        w-[var(--sidebar-width)]
        top-[var(--header-height)] 
        bottom-0
        ${posClasses()}
        transition-all
        bg-darkPrimary
        -z-10
      `}
    >
      <div className="p-5">{children}</div>
    </aside>
  );
};

export default SideBar;