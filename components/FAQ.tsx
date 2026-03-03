
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="bg-[#f7f7f5] py-20 md:py-32 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <p className="text-[12px] font-bold tracking-[0.4em] text-gray-400 mb-2 uppercase">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-widest">よくあるご質問</h2>
            <p className="text-sm text-gray-600 leading-loose mb-10">
              ご利用をご検討中の皆さまから寄せられたご質問の一部をご紹介します。
              そのほか、お問い合わせフォームやLINEでも随時ご質問を承っておりますので、どうぞお気軽にお知らせください。
            </p>
            <Link to="/faq" className="flex items-center gap-4 text-[12px] font-bold tracking-widest border-b border-gray-300 pb-2 w-fit hover:border-[#3a533d] transition-colors">
              <span>FAQ一覧</span>
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative overflow-hidden shadow-2xl">
              <img src="/images/faq_staff_jp_v2.png" alt="FAQ Image" className="w-full h-auto aspect-[2/1] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
