import React from 'react';

interface LogoProps {
    className?: string;
    dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', dark = false }) => {
    const textColor = dark ? 'text-white' : 'text-gray-900';
    const subTextColor = dark ? 'text-gray-400' : 'text-[#3a533d]';
    const gradientId = dark ? "logoGradientDark" : "logoGradientLight";

    return (
        <div className={`flex items-center gap-3 md:gap-4 group cursor-pointer ${className}`}>
            {/* 
        シンボルマーク: 
        「ふるいに掛ける（SIFT）」を表すスタイリッシュな砂時計型・双曲線状のシンボル。
        濃い緑〜エメラルド系グラデーションを用いてハイブランド感を演出。
        中心に鋭く「毒・コア価値」を示す赤いダート。
      */}
            <svg
                width="44"
                height="44"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-180 group-hover:scale-105"
            >
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={dark ? "#a1cda8" : "#2a3d2c"} />
                        <stop offset="50%" stopColor="#3a533d" />
                        <stop offset="100%" stopColor={dark ? "#ffffff" : "#1a241b"} />
                    </linearGradient>
                    <linearGradient id={`${gradientId}-red`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff4d4d" />
                        <stop offset="100%" stopColor="#8b0000" />
                    </linearGradient>
                </defs>

                {/* 外枠のエッジ */}
                <path d="M8 8L24 24L40 8H8Z" fill="transparent" stroke={`url(#${gradientId})`} strokeWidth="1.5" />
                <path d="M8 40L24 24L40 40H8Z" fill="transparent" stroke={`url(#${gradientId})`} strokeWidth="1.5" />

                {/* 中の鋭利な砂/カットモチーフ */}
                <path d="M14 10L24 22L34 10H14Z" fill={`url(#${gradientId})`} fillOpacity="0.8" />
                <path d="M18 36L24 28L30 36H18Z" fill={`url(#${gradientId})`} fillOpacity="0.4" />

                {/* コアとなる一滴の毒 / 価値 */}
                <path d="M24 20L26 24L24 28L22 24L24 20Z" fill={`url(#${gradientId}-red)`} />
            </svg>

            <div className="flex flex-col justify-center translate-y-[2px]">
                {/* フォントは洗練されたセリフ調（Prata等）を想定し、トラッキング強め */}
                <div className={`font-prata text-2xl md:text-[28px] tracking-[0.18em] ${textColor} leading-none flex items-center`}>
                    SALON<span className="ml-3">S</span><span className="text-[#B91C1C]">I</span>FT
                </div>
                <span className={`text-[6px] md:text-[8px] font-bold tracking-[0.35em] ${subTextColor} mt-1.5 uppercase font-montserrat opacity-90`}>
                    Filter the noise. Keep the value.
                </span>
            </div>
        </div>
    );
};

export default Logo;
