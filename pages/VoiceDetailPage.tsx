import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NEWS } from '../constants';
import { ArrowLeft, Clock, MessageCircle, Heart, User } from 'lucide-react';

const VoiceDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const interview = NEWS.find(n => n.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!interview) {
        return (
            <div className="min-h-screen bg-[#f7f7f5] flex items-center justify-center pt-24">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">記事が見つかりませんでした</h2>
                    <Link to="/voice" className="text-[#3a533d] underline">Voice一覧に戻る</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
            <div className="max-w-[800px] mx-auto px-6">
                <Link to="/voice" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#3a533d] transition-colors mb-8">
                    <ArrowLeft size={16} className="mr-2" />
                    BACK TO LIST
                </Link>

                <div className="bg-white shadow-2xl overflow-hidden mb-12 relative group">
                    <div className="aspect-[16/9] w-full relative">
                        <img src={interview.imageUrl} alt={interview.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute top-4 left-4 bg-[#3a533d] text-white text-[10px] font-bold tracking-widest px-4 py-2 uppercase shadow-md">
                            {interview.category}
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="text-[12px] font-bold tracking-widest text-[#3a533d] mb-4">{interview.date}</div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-10 border-l-[6px] border-[#3a533d] pl-5">
                        {interview.title}
                    </h1>
                    
                    <section className="mb-16">
                        <h2 className="flex items-center text-xl font-bold border-b border-gray-200 pb-3 mb-6 tracking-widest text-gray-800">
                            <User className="mr-3 text-[#3a533d]" size={24} /> 
                            <span>PROFILE</span>
                        </h2>
                        <p className="text-base text-gray-700 leading-[2.2] font-bold bg-white p-8 shadow-sm border-t-2 border-[#3a533d]/20">
                            {interview.profile}
                        </p>
                    </section>

                    <section className="mb-16">
                        <h2 className="flex items-center text-xl font-bold border-b border-gray-200 pb-3 mb-6 tracking-widest text-gray-800">
                            <Heart className="mr-3 text-[#B91C1C]" size={24} /> 
                            <span>SALON SIFTを選んだ理由</span>
                        </h2>
                        <p className="text-base text-gray-700 leading-[2.2] font-bold bg-white p-8 shadow-sm border-l-[6px] border-[#B91C1C]">
                            {interview.reason}
                        </p>
                    </section>
                    
                    {interview.schedule && (
                        <section className="mb-16">
                            <h2 className="flex items-center text-xl font-bold border-b border-gray-200 pb-3 mb-6 tracking-widest text-gray-800">
                                <Clock className="mr-3 text-[#3a533d]" size={24} /> 
                                <span>1日のスケジュール例</span>
                            </h2>
                            <div className="bg-white p-8 md:p-10 shadow-sm border-t-2 border-[#3a533d]/20">
                                <ul className="relative border-l-2 border-[#3a533d] ml-4 space-y-8 py-2">
                                    {interview.schedule.map((item, idx) => (
                                        <li key={idx} className="pl-8 relative">
                                            <div className="absolute w-4 h-4 bg-white rounded-full -left-[9px] top-1.5 border-4 border-[#3a533d] shadow-sm"></div>
                                            <span className="block text-sm font-bold text-[#3a533d] mb-1 font-montserrat tracking-widest">{item.time}</span>
                                            <span className="block text-base text-gray-800 font-bold">{item.activity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}

                    <section className="mb-16">
                        <h2 className="flex items-center text-xl font-bold border-b border-gray-200 pb-3 mb-6 tracking-widest text-gray-800">
                            <MessageCircle className="mr-3 text-[#3a533d]" size={24} /> 
                            <span>メッセージ</span>
                        </h2>
                        <div className="relative bg-[#3a533d] text-white p-10 md:p-12 shadow-xl">
                            <span className="absolute top-2 left-4 text-6xl text-white/20 font-serif leading-none">"</span>
                            <p className="text-base md:text-lg leading-[2.2] font-bold relative z-10 text-center px-4">
                                {interview.message}
                            </p>
                            <span className="absolute -bottom-8 right-6 text-6xl text-white/20 font-serif leading-none">"</span>
                        </div>
                    </section>

                </div>

                <div className="text-center mt-20">
                    <Link to="/voice" className="inline-block bg-white text-gray-900 font-bold tracking-[0.3em] px-12 py-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#3a533d] text-sm">
                        VOICE一覧へ戻る
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VoiceDetailPage;
