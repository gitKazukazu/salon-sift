
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const images = [
    '/assets/hero_exterior.png',
    '/assets/hero_interior.png',
    '/assets/hero_shampoo.png',
    '/assets/hero_shampoo.png'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[85vh] md:h-[95vh] min-h-[600px] overflow-hidden bg-[#f7f7f5]">
      <div className="absolute top-8 md:top-10 bottom-4 md:bottom-12 left-6 right-6 md:left-24 md:right-24 overflow-hidden rounded-[2.5rem]">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center animate-ken-burns"
              style={{ backgroundImage: `url('${img}')` }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col justify-start pt-20 md:pt-24">
        <div className="max-w-4xl">
          <div className="mb-8 inline-block bg-white/95 backdrop-blur-sm px-4 py-2 text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase border-l-[4px] border-[#3a533d] shadow-lg">
            hybrid share salon
          </div>

          <div className="space-y-4">
            <h1 className="text-white text-[8vw] md:text-[5rem] font-bold leading-[1] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] tracking-[-0.03em]">
              “ 群馬最大級 ”
            </h1>
            <div className="bg-white/95 backdrop-blur-md inline-block px-5 py-2 md:px-10 md:py-4 shadow-2xl transform md:-translate-x-4">
              <p className="text-[#333] text-[3vw] md:text-2xl font-bold tracking-[0.15em] whitespace-nowrap leading-none">
                あなたの近くにシェアサロン。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden xl:block">
        <div className="text-white/20 font-montserrat tracking-[0.6em] font-bold text-8xl [writing-mode:vertical-rl] select-none uppercase pointer-events-none">
          SALON SIFT
        </div>
      </div>

      <div className="absolute bottom-12 left-2 md:left-8 flex items-center gap-10">
        <div className="text-black text-[10px] font-bold tracking-[0.5em] uppercase [writing-mode:vertical-rl] select-none">
          the hybrid share salon
        </div>
        <div className="w-px h-32 bg-gradient-to-b from-black/60 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 right-0 p-6 flex flex-col items-end gap-1">
        <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">Scroll Down</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/80 to-transparent animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
