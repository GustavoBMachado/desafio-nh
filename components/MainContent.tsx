'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const images = [
  { id: 1, src: '/1.jpeg', title: 'Músicas', texts: ['Texto 1.1', 'Texto 1.2', 'Texto 1.3'] },
  { id: 2, src: '/2.jpeg', title: 'Playlists', texts: ['Texto 2.1', 'Texto 2.2', 'Texto 2.3'] },
  { id: 3, src: '/3.jpeg', title: 'Novos lançamentos', texts: ['Texto 3.1', 'Texto 3.2', 'Texto 3.3'] },
  { id: 4, src: '/4.jpeg', title: 'Artistas', texts: ['Texto 4.1', 'Texto 4.2', 'Texto 4.3'] },
  { id: 5, src: '/5.jpg', title: 'Álbuns', texts: ['Texto 5.1', 'Texto 5.2', 'Texto 5.3'] },
  { id: 6, src: '/6.jpg', title: 'Podcasts', texts: ['Texto 6.1', 'Texto 6.2', 'Texto 6.3'] },
  { id: 7, src: '/7.jpg', title: 'Shows', texts: ['Texto 7.1', 'Texto 7.2', 'Texto 7.3'] },
  { id: 8, src: '/8.jpg', title: 'Gêneros', texts: ['Texto 8.1', 'Texto 8.2', 'Texto 8.3'] },
];

const MainContent: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  const toggleVisibility = (id: number) => {
    setVisibleImages((prev) => {
      if (prev.includes(id)) {
        return prev.filter((imageId) => imageId !== id);
      } else if (prev.length < 4) {
        return [...prev, id];
      } else {
        return prev;
      }
    });
  };

  return (
    <section className="main-content-section p-10 bg-white text-black">
      <h2 className="text-4xl font-bold text-purple-600">O que o Spotify tem?</h2>
      <div className="gallery grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col items-center">
            <Image
              src={image.src}
              alt={image.title}
              width={200}
              height={200}
              onClick={() => toggleVisibility(image.id)}
              className="cursor-pointer"
            />
            {visibleImages.includes(image.id) && (
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-purple-600">{image.title}</h3>
                {image.texts.map((text, index) => (
                  <p key={index} className="text-1xl font-bold">{text}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export { MainContent };