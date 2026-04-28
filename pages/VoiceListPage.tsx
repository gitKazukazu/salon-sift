import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS } from '../constants';

const VoiceListPage: React.FC = () => {
    const interviews = NEWS.filter(post => post.category === 'INTERVIEW');

    return (
        <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-[12px] font-bold tracking-[0.4em] text-[#3a533d] mb-4 uppercase">Voice</p>
                    <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest text-gray-900 mb-6">美容師のリアルな声</h1>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-bold">
                        綺麗事は言いません。ここで語られているのは、現状に不満を抱き、環境を変えることで「圧倒的なリターン」と「時間的自由」を手に入れたメンバーのリアルな記録です。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {interviews.map((interview) => (
                        <Link to={`/voice/${interview.id}`} key={interview.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 block">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={interview.imageUrl}
                                    alt={interview.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-[#3a533d] text-white text-[10px] font-bold tracking-widest px-3 py-1 uppercase">
                                    {interview.category}
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="text-[11px] font-bold tracking-widest text-gray-400 mb-3">{interview.date}</div>
                                <h2 className="text-base md:text-lg font-bold text-gray-900 leading-relaxed mb-4 group-hover:text-[#3a533d] transition-colors line-clamp-3">
                                    {interview.title}
                                </h2>
                                <div className="flex justify-end">
                                    <span className="text-[#3a533d] text-[10px] font-bold tracking-widest uppercase border-b border-[#3a533d] pb-1 group-hover:px-2 transition-all">Read More</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 bg-white p-8 md:p-12 border-l-4 border-[#3a533d] shadow-lg max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold mb-4 text-[#B91C1C]">※閲覧時のご注意</h3>
                    <p className="text-sm leading-relaxed text-gray-700 font-bold">
                        ここで紹介している実績は「最低限の自己管理」と「プロとしての覚悟」を持ったメンバーの結果です。「なんとなく楽をして稼ぎたい」という方には全く参考になりませんので、ご留意ください。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VoiceListPage;
