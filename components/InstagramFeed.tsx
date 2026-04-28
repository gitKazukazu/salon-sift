import React, { useEffect, useState } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramPost {
  id: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  permalink: string;
  caption?: string;
  timestamp: string;
  thumbnail_url?: string;
}

const INSTAGRAM_URL = 'https://www.instagram.com/salon_sift_recruit';

// プレースホルダー投稿（APIが未設定の場合に表示）
const PLACEHOLDER_POSTS: InstagramPost[] = Array.from({ length: 6 }, (_, i) => ({
  id: `placeholder-${i}`,
  media_url: '',
  media_type: 'IMAGE',
  permalink: INSTAGRAM_URL,
  caption: 'SALON SIFT の最新情報はInstagramをチェック！',
  timestamp: new Date().toISOString(),
}));

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/instagram');
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        if (data.data && data.data.length > 0) {
          setPosts(data.data.slice(0, 9)); // 最大9件表示
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const displayPosts = (!loading && !error && posts.length > 0) ? posts : PLACEHOLDER_POSTS;
  const showPlaceholder = error || loading || posts.length === 0;

  return (
    <section className="bg-white py-20 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="text-[#3a533d]" size={24} />
              <p className="text-xs font-bold tracking-[0.4em] text-[#3a533d] uppercase">Instagram</p>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat tracking-widest text-gray-900">
              @salon_sift_recruit
            </h2>
            <p className="text-sm text-gray-500 mt-3 font-bold">
              スタイリストの日常・求人情報を毎日更新中
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#3a533d] text-[#3a533d] font-bold tracking-widest text-xs px-8 py-4 hover:bg-[#3a533d] hover:text-white transition-all duration-300 shrink-0"
          >
            <Instagram size={16} />
            フォローする
          </a>
        </div>

        {/* Feed Grid */}
        {loading ? (
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 animate-pulse" />
            ))}
          </div>
        ) : showPlaceholder ? (
          // API未設定時のプレースホルダーUI
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {PLACEHOLDER_POSTS.map((_, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-[#f7f7f5] flex flex-col items-center justify-center group hover:bg-[#eef2ee] transition-colors border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3a533d]/5 to-transparent" />
                <Instagram
                  className="text-[#3a533d]/40 group-hover:text-[#3a533d]/70 transition-colors mb-3"
                  size={i === 4 ? 48 : 32}
                />
                {i === 4 && (
                  <p className="text-xs font-bold text-[#3a533d]/60 tracking-widest text-center px-4">
                    Instagramで<br />最新投稿を見る
                  </p>
                )}
              </a>
            ))}
          </div>
        ) : (
          // 実際のInstagram投稿グリッド
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {displayPosts.map((post) => {
              const imgSrc = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;
              return (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square relative overflow-hidden group block bg-gray-100"
                >
                  {imgSrc && (
                    <img
                      src={imgSrc}
                      alt={post.caption?.slice(0, 50) || 'SALON SIFT Instagram'}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      size={28}
                    />
                  </div>
                  {/* VIDEO indicator */}
                  {post.media_type === 'VIDEO' && (
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 font-bold tracking-wider">
                      VIDEO
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        )}

        {/* Footer link */}
        <div className="mt-8 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#3a533d] font-bold text-sm tracking-widest hover:opacity-70 transition-opacity border-b border-[#3a533d] pb-1"
          >
            <Instagram size={16} />
            もっと見る @salon_sift_recruit
          </a>
        </div>

      </div>
    </section>
  );
};

export default InstagramFeed;
