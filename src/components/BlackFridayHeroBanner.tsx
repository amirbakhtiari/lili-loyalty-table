import React from 'react';
import { Zap, Tag, Flame } from 'lucide-react';

interface BlackFridayHeroBannerProps {
  themeMode: 'light' | 'dark';
}

export const BlackFridayHeroBanner: React.FC<BlackFridayHeroBannerProps> = ({ themeMode }) => {
  const isLight = themeMode === 'light';

  return (
    <div className="w-full max-w-5xl mx-auto pt-4 sm:pt-6 px-3 sm:px-6">
      {/* Black Friday High-Energy Hero Card */}
      <div className={`relative overflow-hidden rounded-3xl border transition-all p-5 sm:p-7 ${
        isLight
          ? 'bg-gradient-to-br from-neutral-900 via-black to-neutral-900 border-neutral-800 text-white shadow-xl shadow-black/15'
          : 'bg-gradient-to-br from-[#121217] via-[#09090c] to-[#121217] border-neutral-800 text-white shadow-2xl shadow-black'
      }`}>
        {/* Ambient Neon Highlights */}
        <div className="pointer-events-none absolute -top-12 -right-12 w-56 h-56 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 space-y-3 sm:space-y-4">
          {/* Top Badge Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-black tracking-wider uppercase shadow-xs">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>BLACK FRIDAY SALE · ۱۴۰۵</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-yellow-400 font-bold">
              <Flame className="w-3.5 h-3.5 fill-current text-amber-500" />
              <span>بزرگ‌ترین حراج سال پوشاک کودک</span>
            </div>
          </div>

          {/* Headline and Prose */}
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-snug text-white font-sans">
              حراج جمعه سیاه در فروشگاه پوشاک لی لی کیدز
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed max-w-2xl text-neutral-300">
              به مناسبت بلک فرایدی، بالاترین درصدهای تخفیف سال برای تمامی رده‌های اعضای باشگاه مشتریان در دو سقف «تا ۳ تیکه خرید» و «۴ تیکه به بالا» فعال گردید.
            </p>
          </div>

          {/* Mini Event Feature Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
              <Tag className="w-4 h-4 text-yellow-400 shrink-0" />
              <span className="text-neutral-200 font-semibold">تخفیف مستقیم از ۳۰٪ تا ۶۵٪</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
              <span className="text-neutral-200 font-semibold">اعمال خودکار در سبد خرید</span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="text-yellow-400 font-mono font-bold text-sm">⚡</span>
              <span className="text-neutral-200 font-semibold">۴ سطح عضویت ویژه</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
