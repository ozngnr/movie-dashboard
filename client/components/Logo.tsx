import Image from 'next/image';
import logo from '../assets/logo.svg';

const Logo = () => {
  return (
    <div className="w-10">
      <Image src={logo} alt="Movie Dashboard Logo" />
    </div>
  );
};

export default Logo;
