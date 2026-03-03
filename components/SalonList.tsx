
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import { SALONS } from '../constants';

const SalonList: React.FC = () => {
  return (
    <section id="salons" className="bg-[#3a533d] py-20 md:py-32 overflow-hidden relative">
      <div className="absolute top-10 right-0 text-[18vw] font-montserrat font-bold text-white/[0.02] pointer-events-none select-none leading-none">
        SALON INFO
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <p className="text-[12px] font-bold tracking-[0.4em] text-white/50 mb-2 uppercase">Salon Info</p>
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-widest">サロン情報</h2>
          </div>

        </div>

        <div className="space-y-32">
          {SALONS.slice(0, 1).map((salon) => (
            <div key={salon.id} className="flex flex-col lg:flex-row gap-12 group items-center">
              <div className="w-full lg:w-1/2 overflow-hidden shadow-2xl">
                <img src={salon.imageUrl} alt={salon.name} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-white">
                <div className="space-y-2 mb-8">
                  <p className="text-[11px] font-bold tracking-[0.3em] opacity-50 flex items-center gap-3 uppercase">
                    <span className="w-8 h-px bg-white/30"></span>
                    {salon.city}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold font-montserrat leading-tight">{salon.name}</h3>
                  {salon.name.split(' ').length > 2 && (
                    <p className="text-sm opacity-60">SALON SIFT {salon.name.split(' ').slice(2).join(' ')} 店</p>
                  )}
                </div>

                <div className="space-y-6 py-8 border-y border-white/10 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="mt-1 flex-shrink-0 text-white/40" />
                    <div>
                      <p className="text-sm leading-relaxed mb-2">{salon.address}</p>
                      <a href="#" className="inline-flex items-center gap-1 text-[10px] font-bold bg-white/10 px-2 py-1 hover:bg-white/20 transition-colors uppercase">
                        Mapで見る <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={20} className="flex-shrink-0 text-white/40" />
                    <div className="flex items-center gap-4">
                      <p className="text-lg font-montserrat tracking-widest">{salon.phone}</p>
                      <span className="p-1.5 bg-white/10 rounded-full hover:bg-white hover:text-[#3a533d] transition-colors cursor-pointer">
                        <Phone size={14} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex-1 md:flex-none text-center px-10 py-4 border border-white/30 text-[11px] font-bold tracking-widest hover:bg-white hover:text-[#3a533d] transition-all">HOT PEPPER</a>
                  <a href="#" className="flex-1 md:flex-none text-center px-10 py-4 border border-white/30 text-[11px] font-bold tracking-widest hover:bg-white hover:text-[#3a533d] transition-all">楽天ビューティ</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center">
          <Link to="/salons" className="group inline-flex items-center space-x-6 text-white text-[13px] font-bold tracking-[0.3em] hover:translate-x-2 transition-transform">
            <span>SALON SIFT 店舗情報</span>
            <div className="w-12 h-px bg-white/40 group-hover:w-20 transition-all"></div>
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SalonList;
