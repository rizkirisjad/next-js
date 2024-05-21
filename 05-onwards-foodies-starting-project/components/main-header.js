/** @format */

import Link from 'next/link';
import logoImg from '@/assets/logo.png';

const mainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="a plate with food on it" />
      </Link>
    </header>
  );
};
export default mainHeader;
