import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQListPage: React.FC = () => {
    const [openIds, setOpenIds] = useState<number[]>([]);

    const toggleFAQ = (id: number) => {
        setOpenIds(prev =>
            prev.includes(id) ? prev.filter(openId => openId !== id) : [...prev, id]
        );
    };

    return (
        <div className="bg-[#f7f7f5] min-h-screen pt-24 pb-32">
            <div className="max-w-[800px] mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-[12px] font-bold tracking-[0.4em] text-[#3a533d] mb-4 uppercase">FAQ</p>
                    <h1 className="text-3xl md:text-5xl font-bold font-montserrat tracking-widest text-gray-900 mb-6">よくあるご質問<span className="block text-base md:text-lg mt-4 tracking-wider">群馬の美容師求人｜高崎・前橋の美容室 SALON SIFT</span></h1>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-bold">
                        都合の良いメリットだけでなく、厳しい条件も含めて「すべて」お答えします。
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq) => {
                        const isOpen = openIds.includes(faq.id);
                        return (
                            <div
                                key={faq.id}
                                className={`bg-white border transition-colors duration-300 ${isOpen ? 'border-[#3a533d]' : 'border-gray-200'} shadow-sm`}
                            >
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full px-6 py-6 md:px-8 md:py-8 flex items-center justify-between text-left focus:outline-none group"
                                >
                                    <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-[#3a533d]' : 'text-gray-900 group-hover:text-[#3a533d]'}`}>
                                        Q. {faq.question}
                                    </span>
                                    <div className={`ml-4 shrink-0 transition-transform duration-300 ${isOpen ? 'text-[#3a533d] rotate-180' : 'text-gray-400'}`}>
                                        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                                    </div>
                                </button>
                                <div
                                    className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="pt-4 border-t border-gray-100 text-sm md:text-base text-gray-600 leading-relaxed font-bold">
                                        <span className="text-[#3a533d] font-bold mr-2">A.</span>
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-sm text-gray-600 mb-6 font-bold">その他、気になる点がある方はLINEより直接ご相談ください。</p>
                </div>
            </div>
        </div>
    );
};

export default FAQListPage;
