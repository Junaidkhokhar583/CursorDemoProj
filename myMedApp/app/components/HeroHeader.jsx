'use client';
import React, { useState, useEffect } from 'react';
import Hero from './HeroData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { data } from './data.js';

const HeroHeader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Swiper
      speed={3000}
      spaceBetween={30}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      effect={'fade'}
      fadeEffect={{ crossFade: true }}
      modules={[EffectFade, Autoplay]}
      className="mySwiper"
    >
      {data.map(({
        id,
        colorDeep,
        colorLite,
        openText,
        subText,
        mainText,
        shadow,
        mobileShadow,
        src
      }) => (
        <SwiperSlide
          key={id}
          style={{ backgroundColor: colorLite }}
          className="w-full h-screen flex flex-col md:gap-10 md:pt-8"
        >
          <Hero 
            colorDeep={colorDeep}
            openText={openText}
            mainText={mainText}
            subText={subText}
            shadow={shadow}
            mobileShadow={mobileShadow}
            img={src}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroHeader;
