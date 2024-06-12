import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Link from 'next/link';

const HeaderHero: React.FC = () => {
  return (
    <section className="relative text-white">
      {/* Header */}
      <header className="relative p-4 flex justify-between items-center bg-black bg-opacity-75">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Spotify Logo" width={50} height={50} />
        </div>
        <nav className="flex space-x-4">
          <Link href="/"><a>Premium</a></Link>
          <Link href="/"><a>Ajuda</a></Link>
          <Link href="/"><a>Baixar</a></Link>
          <Link href="/"><a className="text-green-500">Entrar</a></Link>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-center p-20"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-75"></div>
        <div className="relative z-10">
          <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
              <h1 className="text-5xl font-bold">Música para todos</h1>
              <div className="mt-4 space-x-4">
                <button className="bg-green-500 px-6 py-2 rounded-full text-lg">Aproveite o Spotify Free</button>
                <button className="border-2 border-white px-6 py-2 rounded-full text-lg">Obter o Spotify Premium</button>
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold">Música para todos 2</h1>
              <div className="mt-4 space-x-4">
                <button className="bg-green-500 px-6 py-2 rounded-full text-lg">Aproveite o Spotify Free</button>
                <button className="border-2 border-white px-6 py-2 rounded-full text-lg">Obter o Spotify Premium</button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { HeaderHero };