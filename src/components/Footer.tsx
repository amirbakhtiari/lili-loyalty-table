import React from 'react';
import { toPersianDigits } from '../data/tierData';
import { ShieldCheck, Globe, Instagram } from 'lucide-react';

interface FooterProps {
  themeMode: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ themeMode }) => {
  const isLight = themeMode === 'light';

  return (
    <footer
      className={`py-6 sm:py-8 px-4 sm:px-6 border-t transition-colors mt-auto ${
        isLight
          ? 'bg-[#FAF8F5] border-stone-200 text-stone-600'
          : 'bg-[#09090c] border-neutral-900 text-neutral-400'
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-center sm:text-right">
        {/* Brand & Links */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className={`w-4 h-4 ${isLight ? 'text-amber-600' : 'text-yellow-400'}`} />
            <span className={`font-black ${isLight ? 'text-stone-900' : 'text-white'}`}>
              فروشگاه پوشاک لی لی کیدز
            </span>
          </div>

          <span className="text-neutral-400">·</span>

          <a
            href="https://lilikids.store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-yellow-500 hover:text-yellow-600 font-bold transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>lilikids.store</span>
          </a>

          <span className="text-neutral-400">·</span>

          <a
            href="https://www.instagram.com/lili.kids"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-yellow-500 hover:text-yellow-600 font-bold transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>اینستاگرام</span>
          </a>
        </div>

        {/* Event / Year Info */}
        <div className="flex items-center justify-center gap-2 text-[11px] font-medium text-neutral-400">
          <span>حراج جمعه سیاه (Black Friday)</span>
          <span className="text-yellow-400 font-bold">⚡</span>
          <span>·</span>
          <span>سال {toPersianDigits(1405)}</span>
        </div>
      </div>
    </footer>
  );
};
