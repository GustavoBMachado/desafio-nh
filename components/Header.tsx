import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Spotify Logo" width={100} height={100} />
      </div>
      <nav className="header-nav">
        <Link href="/" legacyBehavior><a className="header-link">Premium</a></Link>
        <Link href="/" legacyBehavior><a className="header-link">Ajuda</a></Link>
        <Link href="/" legacyBehavior><a className="header-link">Baixar</a></Link><br></br>
        <Link href="/" legacyBehavior><a className="header-link text-green-500">| Entrar</a></Link><br></br>
      </nav>
    </header>
  );
};

export { Header };