import { Drawer as AntDrawer } from 'antd';
import { DrawerProps } from '@/types';
import Nav from './Nav';

const Drawer = ({ open, setOpen }: DrawerProps) => {
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    // <AntDrawer
    //   title="Basic Drawer"
    //   placement="left"
    //   onClose={onClose}
    //   open={open}
    //   classNames={{ content: 'bg-red-900' }}
    // >
    //   <Nav />
    // </AntDrawer>
    <div className="drawer fixed top-0 bottom-0 left-[100px] bg-black z-[10000]">
      <div className="drawer-mask"></div>
      <div className="drawer-content">
        <Nav />
      </div>
    </div>
  );
};

export default Drawer;
