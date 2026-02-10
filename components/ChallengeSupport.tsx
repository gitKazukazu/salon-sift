
import React from 'react';

const ChallengeSupport: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
          <div className="lg:w-1/2">
            <p className="text-[12px] font-bold tracking-[0.4em] text-gray-400 mb-2 uppercase">Challenge Support</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-widest leading-tight">ハッピーチャレンジ制度</h2>
            <p className="text-sm md:text-base text-gray-600 leading-loose mb-12">
              SALON SIFTでは「今より一歩踏み出したい」美容師を後押しする<span className="font-bold underline decoration-[#3a533d] decoration-2 underline-offset-4">5つのスタートアップ支援制度</span>があります。<br />
              「売上に自信がない」「初めてのフリーランスで不安」<br />
              そんな気持ちを“希望”に変える仕組みです。
            </p>
            <div className="bg-[#f9f9f9] p-6 md:p-8 rounded-lg border border-gray-100 shadow-inner">
               <div className="flex justify-between items-end mb-4">
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Growth Forecast</span>
                 <span className="text-[10px] font-bold text-[#3a533d] tracking-widest">HAPPY CHALLENGE PLAN</span>
               </div>
               {/* Dummy Chart Representation */}
               <div className="relative h-48 md:h-64 flex items-end gap-2 px-2 border-l border-b border-gray-200">
                  <div className="flex-1 bg-[#3a533d]/10 h-1/4 rounded-t-sm relative group">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">3M</div>
                  </div>
                  <div className="flex-1 bg-[#3a533d]/20 h-2/5 rounded-t-sm"></div>
                  <div className="flex-1 bg-[#3a533d]/30 h-1/2 rounded-t-sm"></div>
                  <div className="flex-1 bg-[#3a533d]/40 h-3/5 rounded-t-sm"></div>
                  <div className="flex-1 bg-[#3a533d]/60 h-3/4 rounded-t-sm"></div>
                  <div className="flex-1 bg-[#3a533d]/80 h-4/5 rounded-t-sm"></div>
                  <div className="flex-1 bg-[#3a533d] h-full rounded-t-sm"></div>
                  
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] font-bold text-gray-400 px-2 tracking-tighter">
                    <span>3ヶ月</span><span>9ヶ月</span><span>15ヶ月</span><span>21ヶ月</span><span>24ヶ月</span>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-12">
            {[
              { num: '01', title: '安心スタート最低保証', desc: '月25万円の報酬を最低保証。歩合率65%でスタートし、売上が伸びて保証額を超えたら自動的に歩合制に移行するので安心です。', highlight: '月25万円の報酬を最低保証' },
              { num: '02', title: '開業サポートローン', desc: '初期費用が必要な方のための社内借入制度をご用意しました。 (例：最大50万円を無利子で貸付：6ヵ月後から月10万円×5回で返済)', highlight: '最大50万円を無利子で貸付' },
              { num: '03', title: 'シェアサロン基本使用料免除', desc: '対象となるハッピーチャレンジ制度体験勤務の方は、基本使用料が0円となります。対象：移籍後売上を伸ばしたい美容師・時短勤務のママ美容師(準シェア可)・シェアサロン体験勤務', highlight: '基本使用料が0円' },
              { num: '04', title: 'オープニング特典', desc: '新店のオープニングスタッフとして移籍された方には、初期仕入れ10万円分相当を補助。', highlight: '初期仕入れ10万円分相当を補助' },
              { num: '05', title: 'インターン制度', desc: '移籍する美容師が、「初めての転職」「初めてのフリーランス」「初めてのシェアサロン」の場合、体験就労(インターン)を最大6か月間現場のまま副業として行うことが可能です。', highlight: '体験就労(インターン)' }
            ].map((item) => (
              <div key={item.num} className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-montserrat font-bold text-[#3a533d]">{item.num}.</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <div className="pl-12">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="bg-[#3a533d]/10 text-[#3a533d] px-1 font-bold">{item.highlight}</span>{item.desc.replace(item.highlight, '')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSupport;
