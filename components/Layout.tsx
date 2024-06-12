import React from 'react';
import { HeaderHero } from './HeaderHero';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderHero />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };