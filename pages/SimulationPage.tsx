import React, { useState, useEffect } from 'react';

const SimulationPage: React.FC = () => {
  const [sales, setSales] = useState<number | ''>('');
  const [average, setAverage] = useState<number | ''>('');
  const [salary, setSalary] = useState<number | ''>('');
  const [hours, setHours] = useState<number | ''>('');
  const [result, setResult] = useState<{
    weRuleSalary: number;
    difference: number;
    currentHourly: number;
    weRuleHourly: number;
  } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sales || !average || !salary || !hours) {
      alert('すべての項目を入力してください。');
      return;
    }

    // Basic WE RULE simulation logic: 80% return on sales
    const weRuleSalary = Math.floor(Number(sales) * 0.8);
    const difference = weRuleSalary - Number(salary);
    const currentHourly = Math.floor(Number(salary) / Number(hours));
    const weRuleHourly = Math.floor(weRuleSalary / Number(hours));

    setResult({
      weRuleSalary,
      difference,
      currentHourly,
      weRuleHourly
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] font-noto text-[#333]">
      <main className="pt-32 pb-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold tracking-[0.4em] text-[#3a533d] mb-4 uppercase">Simulation</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-widest text-gray-900 mb-6">収益シミュレーション</h1>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              SALON SIFTでの収益を試算できます。<br className="hidden md:block"/>
              実際の収益は、ご利用状況などによって異なりますので、目安としてご利用ください。
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-xl rounded-sm">
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">指名売上 (円/月)</label>
                  <input 
                    type="number" 
                    value={sales} 
                    onChange={e => setSales(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#3a533d] transition-colors"
                    placeholder="例: 800000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">平均客単価 (円)</label>
                  <input 
                    type="number" 
                    value={average} 
                    onChange={e => setAverage(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#3a533d] transition-colors"
                    placeholder="例: 8000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">現在の給料 (円/月)</label>
                  <input 
                    type="number" 
                    value={salary} 
                    onChange={e => setSalary(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#3a533d] transition-colors"
                    placeholder="例: 300000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">現在の勤務時間 (時間/月)</label>
                  <input 
                    type="number" 
                    value={hours} 
                    onChange={e => setHours(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#3a533d] transition-colors"
                    placeholder="例: 200"
                  />
                </div>
              </div>
              
              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full bg-[#3a533d] text-white py-4 font-bold tracking-widest hover:bg-[#2d4230] transition-colors text-lg flex items-center justify-center gap-2"
                >
                  シミュレーション結果を見る
                </button>
              </div>
            </form>

            {result && (
              <div className="mt-12 bg-[#f7f7f5] p-8 border-t-4 border-[#3a533d] animate-fade-in">
                <h3 className="text-xl font-bold text-center mb-8 tracking-widest">シミュレーション結果</h3>
                
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 shadow-sm">
                    <span className="text-gray-600 font-bold mb-2 md:mb-0">SALON SIFT 想定月給</span>
                    <span className="text-3xl md:text-4xl font-bold text-[#3a533d]">
                      {result.weRuleSalary.toLocaleString()} <span className="text-base text-gray-500">円</span>
                    </span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 shadow-sm">
                    <span className="text-gray-600 font-bold mb-2 md:mb-0">現在との差額</span>
                    <span className={`text-2xl md:text-3xl font-bold ${result.difference >= 0 ? 'text-[#B91C1C]' : 'text-blue-600'}`}>
                      {result.difference >= 0 ? '+' : ''}{result.difference.toLocaleString()} <span className="text-base text-gray-500">円</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="bg-white p-4 text-center shadow-sm">
                      <span className="block text-xs text-gray-500 mb-1">現在の時給換算</span>
                      <span className="font-bold text-gray-700">{result.currentHourly.toLocaleString()} 円</span>
                    </div>
                    <div className="bg-white p-4 text-center shadow-sm border-2 border-[#3a533d]/20">
                      <span className="block text-xs text-gray-500 mb-1">SALON SIFT 時給換算</span>
                      <span className="font-bold text-[#3a533d] text-lg">{result.weRuleHourly.toLocaleString()} 円</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SimulationPage;
