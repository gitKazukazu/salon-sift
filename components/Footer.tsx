
import React from 'react';
import { Instagram, ArrowRight, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="bg-[#f7f7f5] py-24 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="grid grid-cols-2 gap-10 md:gap-20 text-[11px] font-bold tracking-[0.4em] uppercase">
            <div className="space-y-10">
              <p className="text-gray-400 border-l-2 border-gray-200 pl-4 mb-10">サイトマップ</p>
              <ul className="space-y-6">
                <li><a href="#" className="hover:text-[#3a533d] transition-colors flex items-center group">TOP <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="hover:text-[#3a533d] transition-colors flex items-center group">SALON SIFTブログ <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="hover:text-[#3a533d] transition-colors flex items-center group">SALON SIFTとは <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="hover:text-[#3a533d] transition-colors flex items-center group">SALON SIFTの特長 <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="hover:text-[#3a533d] transition-colors flex items-center group">SALON SIFTの報酬制度 <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="hover:text-[#3a533d] transition-colors flex items-center group">サロン情報 <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
            </div>
            <div className="space-y-10 pt-16 md:pt-20">
              <ul className="space-y-6">

                <li><a href="#" className="hover:text-[#3a533d] transition-colors flex items-center group">BLOG <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="hover:text-[#3a533d] transition-colors flex items-center group">FAQ <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="hover:text-[#3a533d] transition-colors inline-block pt-4">
                  <Instagram size={24} className="hover:scale-110 transition-transform" />
                </a></li>
              </ul>
            </div>
          </div>

          <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="bg-white border-[3px] border-[#3a533d] p-10 md:p-16 relative overflow-hidden group block shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h3 className="text-[36px] md:text-[52px] font-montserrat font-bold text-[#3a533d] mb-4 leading-none uppercase">Entry from LINE</h3>
                <p className="text-[13px] font-bold tracking-[0.5em] text-[#3a533d] uppercase opacity-80">お問い合わせ・見学予約はこちら</p>
              </div>
              <div className="bg-[#3a533d] text-white p-6 md:p-8 rounded-full group-hover:rotate-45 transition-all duration-700 shadow-lg">
                <ArrowRight size={36} />
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 text-[140px] md:text-[200px] font-montserrat font-bold text-[#3a533d]/[0.04] select-none rotate-12 pointer-events-none">
              LINE
            </div>
          </a>
        </div>
      </div>

      <div className="py-24 md:py-40 flex flex-col items-center px-6">
        <div className="text-[15vw] md:text-[12vw] font-montserrat font-bold tracking-[-0.05em] text-[#3a533d] leading-none mb-12 select-none group flex items-center">
          SALON SIFT
          <span className="text-[2.5vw] font-bold align-top border-[6px] md:border-[8px] border-[#3a533d] ml-6 px-3 py-1 group-hover:bg-[#3a533d] group-hover:text-white transition-all">R</span>
        </div>
        <p className="text-[11px] font-bold tracking-[0.6em] text-gray-400 uppercase">© 2026 SALON SIFT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
