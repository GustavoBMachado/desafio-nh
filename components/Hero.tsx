'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: "url('/capa.png')" }}
      >
        <div className="hero-content">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            navigation
            loop={true}
          >
            <SwiperSlide>
              <div>
                <h1 className="hero-title">Música para todos</h1>
                <div className="mt-4 space-x-4">
                  <button className="hero-button">APROVEITE O SPOTIFY FREE</button>
                  <button className="hero-button-bordered">OBTER O SPOTIFY PREMIUM</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h1 className="hero-title">As melhores rádios</h1>
                <div className="mt-4 space-x-4">
                  <button className="hero-button-bordered">♫OUÇA AGORA</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export { Hero };