import { SideBarProps } from '@/types';

const SideBar = ({ children, position }: SideBarProps) => {
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
      `}
    >
      <div className="">{children}</div>
    </aside>
  );
};

export default SideBar;
