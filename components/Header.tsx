import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="relative text-white p-4 flex justify-between items-center"
      style={{
        backgroundColor: 'transparent'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-45"></div>
      <div className="relative z-10 flex items-center">
        <Image src="/logo.png" alt="Spotify Logo" width={150} height={150} />
      </div>
      <nav className="relative z-10 flex space-x-4">
        <Link href="/" legacyBehavior><a>Premium</a></Link>
        <Link href="/" legacyBehavior><a>Ajuda</a></Link>
        <Link href="/" legacyBehavior><a>Baixar</a></Link>
        <Link href="/" legacyBehavior><a className="text-green-500">Entrar</a></Link>
      </nav>
    </header>
  );
};

export { Header };