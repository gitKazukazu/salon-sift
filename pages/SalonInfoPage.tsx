import React from 'react';
import { MapPin, Phone, ExternalLink, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { SALONS } from '../constants';

const SalonInfoPage: React.FC = () => {
    // 最初の店舗のみを取得
    const salon = SALONS[0];

    return (
        <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-[12px] font-bold tracking-[0.4em] text-[#3a533d] mb-4 uppercase">Flagship Salon</p>
                    <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest text-gray-900 mb-6">{salon.name}</h1>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-[#3a533d] border border-[#3a533d] px-3 py-1 inline-block mb-6">
                        {salon.city}
                    </div>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-bold">
                        設備投資は私たちが負担します。あなたは自分の技術とお客様に向き合うだけです。
                        ハイエンドな空間と最新の設備を備えた、私たちの旗艦店です。
                    </p>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-[21/9] w-full mb-20 overflow-hidden shadow-2xl">
                    <img
                        src={salon.imageUrl}
                        alt={salon.name}
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-[#B91C1C] text-white px-6 py-3 text-xs md:text-sm font-bold tracking-widest shadow-lg">
                        ただいま美容師・アイリスト急募中
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* 左側：詳細情報と条件 */}
                    <div className="lg:col-span-7 space-y-16">
                        <section>
                            <h2 className="text-2xl font-bold border-b-2 border-[#3a533d] pb-4 mb-8 tracking-widest">募集要項・待遇</h2>
                            <div className="space-y-6 text-sm font-bold text-gray-700">
                                <div className="bg-white p-6 shadow-sm border-l-4 border-[#3a533d]">
                                    <h3 className="text-lg text-[#3a533d] mb-2 border-b border-gray-100 pb-2">圧倒的な還元率</h3>
                                    <p className="leading-relaxed mt-4">材料持込の場合は売上の<span className="text-[#B91C1C] text-base">80%還元</span>。サロン材料を使用する場合でも70%という高水準の還元率を実現。</p>
                                </div>
                                <div className="bg-white p-6 shadow-sm border-l-4 border-[#3a533d]">
                                    <h3 className="text-lg text-[#3a533d] mb-2 border-b border-gray-100 pb-2">集客の全面バックアップ</h3>
                                    <p className="leading-relaxed mt-4">ホットペッパービューティーの最上位プランやSNS広告費はすべてサロン側で負担。新規フリー客への入客チャンスも豊富に確保しています。</p>
                                </div>
                                <div className="bg-white p-6 shadow-sm border-l-4 border-[#3a533d]">
                                    <h3 className="text-lg text-[#3a533d] mb-2 border-b border-gray-100 pb-2">ネイル・アイラッシュ技術者も歓迎</h3>
                                    <p className="leading-relaxed mt-4">美容師と全く同じ「手取り最大化」の条件で合流可能です。個室や専用ブースをご用意しています。</p>
                                </div>
                                <div className="bg-white p-6 shadow-sm border-l-4 border-gray-300">
                                    <h3 className="text-lg text-gray-600 mb-2 border-b border-gray-100 pb-2">※自己管理の徹底</h3>
                                    <p className="leading-relaxed mt-4">自由な働き方を推奨しますが、お客様への責任感とプロとしての「最低限の自己管理」ができない方は契約を解除する場合があります。</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold border-b-2 border-[#3a533d] pb-4 mb-8 tracking-widest">サロン環境・設備</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-gray-700">
                                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#3a533d]" size={18} /> 全席半個室・フルフラット</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#3a533d]" size={18} /> 最新のカラー剤・パーマ液</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#3a533d]" size={18} /> 撮影機材・照明器具貸出無料</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#3a533d]" size={18} /> ロッカー・スタッフルーム</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#3a533d]" size={18} /> タオルクリーニング業者委託</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#3a533d]" size={18} /> Wi-Fi・電源・充電器完備</li>
                            </ul>
                        </section>
                    </div>

                    {/* 右側：アクセスと基本情報 */}
                    <div className="lg:col-span-5">
                        <div className="bg-white shadow-xl p-8 md:p-10 sticky top-28">
                            <h3 className="text-xl font-bold font-montserrat tracking-widest border-b border-gray-200 pb-4 mb-8">ACCESS & INFO</h3>

                            <div className="space-y-6 text-sm font-bold text-gray-700 mb-10">
                                <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
                                    <MapPin size={20} className="text-[#3a533d] shrink-0 mt-0.5" />
                                    <div>
                                        <p className="leading-relaxed mb-2">{salon.address}</p>
                                        <a href={`https://maps.google.com/?q=${salon.address}`} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-[#3a533d] border-b border-[#3a533d] hover:text-[#B91C1C] hover:border-[#B91C1C] transition-colors">
                                            Google Maps で開く
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                                    <Phone size={20} className="text-[#3a533d] shrink-0" />
                                    <p className="text-lg font-montserrat tracking-wider">{salon.phone}</p>
                                </div>
                                <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                                    <Clock size={20} className="text-[#3a533d] shrink-0" />
                                    <p>9:00 - 22:00（自由出勤制）</p>
                                </div>
                                <div className="flex items-center gap-4 pb-6">
                                    <Calendar size={20} className="text-[#3a533d] shrink-0" />
                                    <p>年中無休（シフト自由）</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                {salon.links.hotpepper && (
                                    <a href={salon.links.hotpepper} className="bg-[#333] text-white text-center py-4 text-xs font-bold tracking-widest hover:bg-[#3a533d] transition-colors flex items-center justify-center gap-2">
                                        HotPepper Beauty <ExternalLink size={14} />
                                    </a>
                                )}
                                {salon.links.beauty && (
                                    <a href={salon.links.beauty} className="border border-gray-300 text-center py-4 text-xs font-bold tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                        Official Website <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalonInfoPage;
