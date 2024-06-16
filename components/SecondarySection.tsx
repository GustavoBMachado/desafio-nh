import React from 'react';
import Image from 'next/image';

const SecondarySection: React.FC = () => {
  return (
    <section className="secondary-section">
      <div className="secondary-background" style={{ backgroundImage: "url('/capa.png')" }}></div>
      <div className="secondary-overlay"></div>
      <h2 className="secondary-title">Fácil</h2>
      <div className="secondary-content">
        <p><strong>Buscar</strong><br />Já sabe o que quer escutar? É só procurar e apertar o play.</p>
        <p><strong>Navegar</strong><br />Veja os novos lançamentos, o que está bombando nas paradas e as melhores playlists para o seu momento.</p>
        <p><strong>Descobrir</strong><br />Curta músicas novas toda segunda-feira com uma playlist personalizada pra você. Ou relaxe e curta uma das rádios.</p>
      </div>
      <div className="secondary-images">
        <img src="/iphone1.png" alt="Imagem 1" className="secondary-image image1 transform rotate-12" />
        <img src="/iphone2.png" alt="Imagem 2" className="secondary-image image2 transform rotate-12" />
      </div>
    </section>
  );
};

export { SecondarySection };