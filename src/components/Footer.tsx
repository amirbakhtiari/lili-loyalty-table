import React from 'react';
import { toPersianDigits } from '../data/tierData';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  themeMode: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ themeMode }) => {
  const isLight = themeMode === 'light';

  return (
    <footer
      className={`py-6 sm:py-8 px-4 sm:px-6 border-t transition-colors mt-auto ${
        isLight
          ? 'bg-[#FAF8F5] border-stone-200 text-stone-500'
          : 'bg-[#09090c] border-neutral-900 text-neutral-500'
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-center sm:text-right">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <ShieldCheck className={`w-4 h-4 ${isLight ? 'text-amber-500' : 'text-yellow-400'}`} />
          <span className={`font-bold ${isLight ? 'text-stone-800' : 'text-neutral-200'}`}>
            فروشگاه پوشاک لی لی کیدز
          </span>
          <span>·</span>
          <span>باشگاه مشتریان</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
          <span>حراج جمعه سیاه (Black Friday)</span>
          <span className="text-yellow-400 font-bold">⚡</span>
          <span>·</span>
          <span>سال {toPersianDigits(1405)}</span>
        </div>
      </div>
    </footer>
  );
};
