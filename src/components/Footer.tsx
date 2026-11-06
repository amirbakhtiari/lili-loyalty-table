import React from 'react';
import { toPersianDigits } from '../data/tierData';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  themeMode: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ themeMode }) => {
  const isLight = themeMode === 'light';

  return (
    <footer
      className={`py-8 px-4 sm:px-6 border-t transition-colors mt-auto ${
        isLight
          ? 'bg-stone-50 border-stone-200 text-stone-500'
          : 'bg-neutral-950 border-neutral-900 text-neutral-500'
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className={`w-4 h-4 ${isLight ? 'text-emerald-600' : 'text-emerald-500'}`} />
          <span className={`font-bold ${isLight ? 'text-stone-800' : 'text-neutral-200'}`}>
            بوتیک پوشاک کودک لیلی کیدز
          </span>
          <span>·</span>
          <span>آیین‌نامه رسمی تخفیف‌های اعضا</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-stone-400">
          <span>طراحی اختصاصی با عشق</span>
          <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
          <span>·</span>
          <span>سال {toPersianDigits(1403)}</span>
        </div>
      </div>
    </footer>
  );
};
