import React from 'react';

interface YaldaHeroBannerProps {
  themeMode: 'light' | 'dark';
}

export const YaldaHeroBanner: React.FC<YaldaHeroBannerProps> = ({ themeMode }) => {
  const isLight = themeMode === 'light';

  return (
    <div className="w-full max-w-5xl mx-auto pt-4 sm:pt-6 px-3 sm:px-6">
      {/* Clean Yalda Festive Card */}
      <div className={`relative overflow-hidden rounded-3xl border transition-all p-5 sm:p-7 ${
        isLight
          ? 'bg-gradient-to-br from-rose-50/90 via-amber-50/50 to-rose-50/70 border-rose-200/80 shadow-md shadow-rose-100/40'
          : 'bg-gradient-to-br from-rose-950/40 via-neutral-900 to-neutral-950 border-rose-900/60 shadow-lg shadow-black'
      }`}>
        {/* Decorative Festive Ambient Halos */}
        <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-rose-400/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 space-y-3 sm:space-y-4">
          {/* Top Festive Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${
              isLight
                ? 'bg-rose-100/80 text-rose-900 border-rose-200'
                : 'bg-rose-950/80 text-rose-200 border-rose-800'
            }`}>
              {/* Pomegranate Mini Icon */}
              <svg className="w-3.5 h-3.5 text-rose-600 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2c-.6 0-1.1.3-1.4.8-.4.5-.4 1.2-.2 1.8-3.4.7-6 3.7-6 7.4 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.7-6-7.4.2-.6.2-1.3-.2-1.8-.3-.5-.8-.8-1.4-.8zm-1 3.5c.3 0 .7.1 1 .1s.7-.1 1-.1c.3.5.2 1.1-.1 1.4-.4.4-.9.6-1.5.6-.5 0-1-.2-1.4-.6-.2-.3-.3-.9 0-1.4z" />
              </svg>
              <span>جشنواره شب یلدا ۱۴۰۵</span>
              <span className="opacity-40">|</span>
              <span className="text-[11px] font-normal">تخفیف‌های ویژه اعضای باشگاه</span>
            </div>

            <span className={`text-xs font-medium ${isLight ? 'text-rose-800/80' : 'text-rose-300/80'}`}>
              🍉 شادباش یلدا به تمامی خانواده‌های عزیز
            </span>
          </div>

          {/* Headline and Prose */}
          <div className="space-y-1.5">
            <h2 className={`text-lg sm:text-2xl font-black tracking-tight leading-snug ${
              isLight ? 'text-stone-900' : 'text-white'
            }`}>
              یلدا مبارک؛ طولانی‌ترین شب سال در کنار فروشگاه پوشاک لی لی کیدز
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${
              isLight ? 'text-stone-600' : 'text-neutral-300'
            }`}>
              به مناسبت فرارسیدن شب یلدا، جدول ویژه تخفیف‌های باشگاه مشتریان برای خرید پوشاک پاییزی و زمستانه کودکان و نوجوانان در دو ردیف «تا ۳ تیکه» و «۴ تیکه به بالا» تقدیم شما عزیزان می‌گردد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
