
import React from 'react';
import { NEWS } from '../constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const BlogNews: React.FC = () => {
  return (
    <section id="blog" className="bg-[#f7f7f5] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[12px] font-bold tracking-[0.4em] text-gray-400 mb-2 uppercase">Blog & News</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest">新着記事</h2>
          
          <div className="mt-10 flex justify-center">
            <div className="bg-gray-200 p-1 flex gap-1 rounded-sm">
              <button className="bg-[#3a533d] text-white px-8 py-2 text-[11px] font-bold tracking-widest">美容師の声</button>
              <button className="bg-white text-gray-400 px-8 py-2 text-[11px] font-bold tracking-widest hover:bg-gray-50">ブログ&ニュース</button>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
            {NEWS.map((item, idx) => (
              <div key={item.id} className="min-w-[280px] md:min-w-[320px] bg-white shadow-sm snap-start group/card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" />
                  <div className="absolute top-0 left-0 bg-[#3a533d] text-white text-[60px] font-montserrat font-bold leading-none p-2 opacity-10">
                    0{idx + 1}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold text-gray-400">{item.date}</span>
                    <span className="text-[10px] font-bold border border-gray-200 px-2 py-0.5 text-gray-500">{item.category}</span>
                  </div>
                  <h3 className="text-sm font-bold leading-relaxed h-12 overflow-hidden group-hover/card:text-[#3a533d] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            <ArrowLeft size={20} />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
           <a href="#" className="flex items-center justify-center gap-4 text-[12px] font-bold tracking-widest border-b border-gray-300 pb-2 hover:border-[#3a533d] transition-colors">
             <span>美容師の声一覧</span>
             <ArrowRight size={14} />
           </a>
           <a href="#" className="flex items-center justify-center gap-4 text-[12px] font-bold tracking-widest border-b border-gray-300 pb-2 hover:border-[#3a533d] transition-colors">
             <span>ブログ＆ニュース一覧</span>
             <ArrowRight size={14} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
