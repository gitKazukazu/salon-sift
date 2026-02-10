
import React from 'react';

const Ticker: React.FC = () => {
  const text = "Live by Design, Not by Default.";

  return (
    <div className="bg-[#3a533d] py-4 overflow-hidden border-t border-b border-[#4a634d]">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-white font-montserrat text-2xl font-bold italic opacity-90 mx-4">
          {Array(10).fill(text).map((t, i) => (
            <span key={i} className="inline-block mr-20">{t}</span>
          ))}
        </span>
        <span className="text-white font-montserrat text-2xl font-bold italic opacity-90 mx-4">
          {Array(10).fill(text).map((t, i) => (
            <span key={`dup-${i}`} className="inline-block mr-20">{t}</span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Ticker;
