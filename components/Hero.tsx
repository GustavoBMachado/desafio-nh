import React from 'react';
import Image from 'next/image';


const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center p-20"
      style={{
        backgroundImage: "url('/capa.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-85"></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-bold">Música para todos</h1>
        <div className="mt-4 space-x-4">
          <button className="bg-purple-500 px-6 py-2 rounded-full text-lg">Aproveite o Spotify Free</button>
          <button className="border-2 border-white px-6 py-2 rounded-full text-lg">Obter o Spotify Premium</button>
        </div>
      </div>
    </section>
  );
};

export { Hero };