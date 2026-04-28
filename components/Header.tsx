
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, HelpCircle, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#f7f7f5]/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex flex-col items-center">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-10 text-[12px] font-bold tracking-[0.2em] text-[#333]">
          <Link to="/about" className="hover:text-[#3a533d] transition-colors">SALON SIFTとは</Link>
          <Link to="/salons" className="hover:text-[#3a533d] transition-colors flex items-center gap-2">
            サロン情報 <span className="bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-montserrat">1</span>
          </Link>
          <Link to="/simulation" className="flex items-center space-x-2 hover:text-[#3a533d] transition-colors">
            <span className="w-2 h-2 bg-[#3a533d] rounded-full"></span>
            <span>収益シミュレーション</span>
          </Link>
          <Link to="/faq" className="hover:text-[#3a533d] transition-colors">FAQ</Link>
          <Link to="/voice" className="hover:text-[#3a533d] transition-colors">美容師の声</Link>
          <Link to="/blog" className="hover:text-[#3a533d] transition-colors">ブログ</Link>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 text-[11px] font-bold tracking-wider text-gray-500 border-b border-gray-300 pb-1 cursor-pointer hover:border-[#3a533d] transition-all">
            <HelpCircle size={15} />
            <span>お問い合わせ・見学予約はこちら</span>
          </div>

          <button className="xl:hidden flex flex-col gap-1.5 p-2">
            <div className="w-8 h-0.5 bg-gray-900"></div>
            <div className="w-8 h-0.5 bg-gray-900"></div>
          </button>
        </div>
      </div>
    </header >
  );
};

export default Header;
