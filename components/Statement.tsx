
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Statement: React.FC = () => {
  return (
    <section className="bg-[#f7f7f5] py-20 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[12px] font-bold tracking-[0.4em] text-gray-400 mb-2 uppercase">Statement</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.4] text-gray-900">
              雇われ方を選ぶ時代から、<br />
              働き方を設計する時代へ
            </h2>
            <div className="space-y-6 text-base md:text-md leading-loose text-gray-600">
              <p>お客様に愛され、自分らしく輝く場所を。</p>
              <p>充実の支援が、あなたの挑戦を支える。</p>
              <p>働き方を設計し、強みを活かすステージへ。</p>
              <p>こころから満足できる、美容師人生のために。</p>
            </div>

            <a href="#blog" className="inline-flex items-center gap-4 text-sm font-bold tracking-widest text-[#3a533d] border-b border-[#3a533d] pb-2 group">
              <span>美容師の声一覧</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-8">
                  <img src="/images/statement/hero.png" alt="Hero portrait" className="w-full h-[400px] md:h-[600px] object-cover shadow-2xl" />
                </div>
                <div className="hidden md:block col-span-4 space-y-4 pt-12">
                  <img src="/images/statement/detail1.png" alt="Detail 1" className="w-full h-[200px] object-cover" />
                  <img src="/images/statement/detail2.png" alt="Detail 2" className="w-full h-[280px] object-cover" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border-4 border-[#3a533d]/10 -z-10 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
