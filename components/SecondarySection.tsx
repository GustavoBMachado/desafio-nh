import React from 'react';
import Image from 'next/image';

const SecondarySection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center p-20">
      <h2 className="text-4xl font-bold">Fácil</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-2xl font-bold">Buscar</h3>
          <p className="mt-2">Já sabe o que quer escutar? É só procurar e apertar o play.</p>
          <h3 className="text-2xl font-bold mt-6">Navegar</h3>
          <p className="mt-2">Veja os novos lançamentos, o que está bombando nas paradas e as melhores playlists para seu momento.</p>
          <h3 className="text-2xl font-bold mt-6">Descobrir</h3>
          <p className="mt-2">Curta músicas novas toda semana feita com uma playlist personalizada pra você. Ou relaxe e curta uma das rádios.</p>
        </div>
        <div className="flex justify-center">
          <Image src="/phones.png" alt="Spotify on phones" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default SecondarySection;