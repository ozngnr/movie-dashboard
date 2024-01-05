import Header from './Header';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Drawer from './Drawer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <SideBar position="left">
        <Navbar />
      </SideBar>
      <main className="xl:mx-[var(--sidebar-width)] transition-[margin]">
        {children}
      </main>
      <SideBar position="right">
        <div>Side bar</div>
      </SideBar>
      <Drawer>
        <Navbar />
      </Drawer>
    </div>
  );
};

export default Layout;
