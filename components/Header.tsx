import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Spotify Logo" width={50} height={50} />
        <div className="text-2xl font-bold ml-2">Spotify</div>
      </div>
      <nav className="flex space-x-4">
        <Link href="#"><a>Premium</a></Link>
        <Link href="#"><a>Ajuda</a></Link>
        <Link href="#"><a>Baixar</a></Link>
        <Link href="#"><a className="text-green-500">Entrar</a></Link>
      </nav>
    </header>
  );
};

export default Header;