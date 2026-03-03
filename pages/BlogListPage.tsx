import React from 'react';
import { NEWS } from '../constants';

const BlogListPage: React.FC = () => {
    const blogs = NEWS.filter(post => post.category !== 'INTERVIEW');
    // For this example, let's treat all items as blog posts if we don't have enough data
    const displayBlogs = blogs.length > 0 ? blogs : NEWS;

    return (
        <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-[12px] font-bold tracking-[0.4em] text-[#3a533d] mb-4 uppercase">Blog</p>
                    <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest text-gray-900 mb-6">ブログ & ニュース</h1>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-bold">
                        サロンスタイルの最新情報、シェアサロンのリアルな裏側、そして美容師としての生存戦略について発信します。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {displayBlogs.map((blog) => (
                        <article key={blog.id} className="group cursor-pointer">
                            <div className="relative aspect-[16/9] overflow-hidden mb-6">
                                <img
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-[11px] font-bold tracking-widest text-[#3a533d] border border-[#3a533d] px-2 py-1 uppercase">
                                        {blog.category}
                                    </span>
                                    <span className="text-[11px] font-bold tracking-widest text-gray-400">
                                        {blog.date}
                                    </span>
                                </div>
                                <h2 className="text-lg font-bold text-gray-900 leading-relaxed mb-4 group-hover:text-[#3a533d] transition-colors line-clamp-2">
                                    {blog.title}
                                </h2>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogListPage;
