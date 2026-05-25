
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { MicroCMSBlog, MicroCMSListResponse, MicroCMSVoice } from '../types';

type TabType = 'INTERVIEW' | 'OTHER';

interface CardItem {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  date: string;
  category: string;
}

const formatDate = (iso?: string): string => {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};

const BlogNews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('INTERVIEW');
  const [voices, setVoices] = useState<MicroCMSVoice[]>([]);
  const [blogs, setBlogs] = useState<MicroCMSBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    // order昇順、未入力は末尾、同順内はdate降順
    const sortByOrder = <T extends { order?: number; date?: string }>(items: T[]): T[] =>
      [...items].sort((a, b) => {
        const aHas = typeof a.order === 'number';
        const bHas = typeof b.order === 'number';
        if (aHas && bHas) return (a.order as number) - (b.order as number);
        if (aHas) return -1;
        if (bHas) return 1;
        return (b.date ?? '').localeCompare(a.date ?? '');
      });

    Promise.all([
      fetch('/api/microcms/voice').then(r => r.ok ? r.json() as Promise<MicroCMSListResponse<MicroCMSVoice>> : Promise.reject(`voice HTTP ${r.status}`)),
      fetch('/api/microcms/blog').then(r => r.ok ? r.json() as Promise<MicroCMSListResponse<MicroCMSBlog>> : Promise.reject(`blog HTTP ${r.status}`)),
    ])
      .then(([voiceRes, blogRes]) => {
        if (cancelled) return;
        setVoices(sortByOrder(voiceRes.contents));
        const visibleBlogs = blogRes.contents.filter(b => b.isVisible !== false);
        setBlogs(sortByOrder(visibleBlogs));
        setLoading(false);
      })
      .catch(err => {
        if (cancelled) return;
        console.error('BlogNews fetch error:', err);
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  const displayItems: CardItem[] = activeTab === 'INTERVIEW'
    ? voices.map(v => ({
        id: v.id,
        slug: v.slug,
        title: v.title,
        imageUrl: v.image.url,
        date: formatDate(v.date),
        category: v.category?.join(' / ') ?? '',
      }))
    : blogs.map(b => ({
        id: b.id,
        slug: b.slug,
        title: b.title,
        imageUrl: b.image.url,
        date: formatDate(b.date),
        category: b.category?.join(' / ') ?? '',
      }));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="bg-[#f7f7f5] py-20 md:py-32 overflow-hidden relative">
      <div className="absolute top-10 left-[5%] text-[9vw] font-montserrat font-bold italic text-gray-300/40 pointer-events-none select-none leading-none z-0">
        Blog & News
      </div>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mt-10 md:mt-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest">新着記事</h2>

          <div className="mt-10 flex justify-center">
            <div className="bg-gray-200 p-1 flex gap-1 rounded-sm">
              <button
                onClick={() => setActiveTab('INTERVIEW')}
                className={`px-8 py-2 text-[11px] font-bold tracking-widest transition-colors ${activeTab === 'INTERVIEW' ? 'bg-[#3a533d] text-white' : 'bg-transparent text-gray-500 hover:bg-white/50'}`}
              >
                美容師の声
              </button>
              <button
                onClick={() => setActiveTab('OTHER')}
                className={`px-8 py-2 text-[11px] font-bold tracking-widest transition-colors ${activeTab === 'OTHER' ? 'bg-[#3a533d] text-white' : 'bg-transparent text-gray-500 hover:bg-white/50'}`}
              >
                ブログ&ニュース
              </button>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar scroll-smooth"
          >
            {loading ? (
              <div className="w-full py-20 text-center text-gray-400 font-bold tracking-widest text-sm flex items-center justify-center">
                読み込み中...
              </div>
            ) : displayItems.length > 0 ? (
              displayItems.map((item, idx) => (
                <Link to={activeTab === 'INTERVIEW' ? `/voice/${item.slug}` : `/blog/${item.slug}`} key={item.id} className="min-w-[280px] md:min-w-[320px] bg-white shadow-sm snap-start group/card block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" />
                    <div className="absolute top-0 left-0 bg-[#3a533d] text-white text-[60px] font-montserrat font-bold leading-none p-2 opacity-10">
                      0{idx + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold text-gray-400">{item.date}</span>
                      {item.category && (
                        <span className="text-[10px] font-bold border border-gray-200 px-2 py-0.5 text-gray-500">{item.category}</span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold leading-relaxed h-12 overflow-hidden group-hover/card:text-[#3a533d] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))
            ) : (
              <div className="w-full py-20 text-center text-gray-400 font-bold tracking-widest text-sm flex items-center justify-center">
                現在表示できる記事はありません。
              </div>
            )}
          </div>

          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block z-10 hover:bg-gray-50 text-gray-700 cursor-pointer"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block z-10 hover:bg-gray-50 text-gray-700 cursor-pointer"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
          <Link to="/voice" className="flex items-center justify-center gap-4 text-[12px] font-bold tracking-widest border-b border-gray-300 pb-2 hover:border-[#3a533d] transition-colors">
            <span>美容師の声一覧</span>
            <ArrowRight size={14} />
          </Link>
          <Link to="/blog" className="flex items-center justify-center gap-4 text-[12px] font-bold tracking-widest border-b border-gray-300 pb-2 hover:border-[#3a533d] transition-colors">
            <span>ブログ＆ニュース一覧</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
