import React from 'react';
import Image from 'next/image';

const MainContent: React.FC = () => {
  return (
    <section className="p-10 bg-white text-black">
      <h2 className="text-4xl font-bold text-purple-500">O que o Spotify tem?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="flex flex-col items-center">
          <Image src="/1.jpeg" alt="Músicas" width={200} height={200} />
          <h3 className="text-2xl font-bold text-purple-500">Músicas</h3>
          <p>O Spotify tem milhões de músicas. Escute seus sons favoritos, descubra novas músicas e revisite seus favoritos em um só lugar.</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/2.jpeg" alt="Playlists" width={200} height={200} />
          <h3 className="text-2xl font-bold text-purple-500">Playlists</h3>
          <p>No Spotify você encontra uma playlist para cada momento. Todas feitas por fanáticos e especialistas da música.</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/3.jpeg" alt="Novos lançamentos" width={200} height={200} />
          <h3 className="text-2xl font-bold text-purple-500">Novos lançamentos</h3>
          <p>Escute os novos lançamentos de singles e álbuns da semana e veja o que está bombando no Top 50.</p>
        </div>
      </div>
    </section>
  );
};

export { MainContent };