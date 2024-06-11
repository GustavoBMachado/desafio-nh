import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Spotify Logo" width={150} height={150} />
        </div>
        <div className="flex flex-col md:flex-row mt-6 md:mt-0 space-y-4 md:space-y-0 md:space-x-10">
          <div className="text-center md:text-left">
            <h4 className="font-bold">COMPANY</h4>
            <ul className="space-y-2">
              <li>Empregos</li>
              <li>For the Record</li>
              <li>Novidades</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold">COMUNIDADES</h4>
            <ul className="space-y-2">
              <li>Desenvolvedores</li>
              <li>Marcas</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold">LINKS ÚTEIS</h4>
            <ul className="space-y-2">
              <li>Ajuda</li>
              <li>Player na web</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };