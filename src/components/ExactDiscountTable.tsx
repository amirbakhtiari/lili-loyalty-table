import React, { useState } from 'react';

interface ExactDiscountTableProps {
  themeMode: 'light' | 'dark';
}

interface TierInfo {
  id: string;
  name: string;
  englishTitle: string;
  upTo3: string;
  fourPlus: string;
  theme: {
    dot: string;
  };
}

const TIERS: TierInfo[] = [
  {
    id: 'white',
    name: 'مشتریان سفید',
    englishTitle: 'White Tier',
    upTo3: '۳۰٪',
    fourPlus: '۵۰٪',
    theme: {
      dot: 'bg-white border-2 border-stone-300 shadow-xs',
    },
  },
  {
    id: 'green',
    name: 'مشتریان سبز',
    englishTitle: 'Green Tier',
    upTo3: '۳۵٪',
    fourPlus: '۵۵٪',
    theme: {
      dot: 'bg-emerald-500 border-emerald-600 shadow-xs shadow-emerald-500/50',
    },
  },
  {
    id: 'silver',
    name: 'مشتریان نقره ای',
    englishTitle: 'Silver Tier',
    upTo3: '۴۰٪',
    fourPlus: '۶۰٪',
    theme: {
      dot: 'bg-gradient-to-tr from-slate-400 to-slate-200 border-slate-400 shadow-xs',
    },
  },
  {
    id: 'gold',
    name: 'مشتریان طلایی',
    englishTitle: 'Gold VIP',
    upTo3: '۴۵٪',
    fourPlus: '۶۵٪',
    theme: {
      dot: 'bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 border-amber-400 shadow-xs shadow-amber-500/50',
    },
  },
];

export const ExactDiscountTable: React.FC<ExactDiscountTableProps> = ({ themeMode }) => {
  const [selectedColumn, setSelectedColumn] = useState<'all' | 'upTo3' | 'fourPlus'>('all');

  const isLight = themeMode === 'light';

  return (
    <div className="w-full max-w-5xl mx-auto py-5 sm:py-8 px-3 sm:px-6">
      {/* Table Header Strip with Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-400 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span>فروشگاه پوشاک لی لی کیدز</span>
            <span className="text-stone-300 dark:text-neutral-700">·</span>
            <span>۴ سطح مشتریان</span>
          </div>
          <h3 className={`text-lg sm:text-2xl font-black ${isLight ? 'text-stone-900' : 'text-white'}`}>
            جدول تخفیف‌های باشگاه مشتریان
          </h3>
        </div>

        {/* Quick Filter: All vs Up to 3 vs 4+ */}
        <div className={`p-1 rounded-xl border flex items-center gap-1 self-start sm:self-auto ${
          isLight ? 'bg-stone-100 border-stone-200' : 'bg-neutral-900 border-neutral-800'
        }`}>
          <button
            onClick={() => setSelectedColumn('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedColumn === 'all'
                ? isLight
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'bg-neutral-800 text-white shadow-2xs'
                : isLight ? 'text-stone-600' : 'text-neutral-400'
            }`}
          >
            همه ستون‌ها
          </button>
          <button
            onClick={() => setSelectedColumn('upTo3')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedColumn === 'upTo3'
                ? isLight
                  ? 'bg-white text-stone-900 shadow-2xs font-bold'
                  : 'bg-neutral-800 text-white shadow-2xs font-bold'
                : isLight ? 'text-stone-600' : 'text-neutral-400'
            }`}
          >
            تا ۳ تیکه خرید
          </button>
          <button
            onClick={() => setSelectedColumn('fourPlus')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedColumn === 'fourPlus'
                ? 'bg-rose-600 text-white shadow-2xs'
                : isLight ? 'text-rose-800' : 'text-rose-400'
            }`}
          >
            ۴ تیکه به بالا
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 1. MOBILE CARDS VIEW (Clean, direct, touch-friendly) */}
      {/* ------------------------------------------------------------- */}
      <div className="block sm:hidden space-y-3 mb-5">
        {TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`p-4 rounded-2xl border transition-all ${
              isLight
                ? 'bg-white border-rose-100/90 shadow-sm'
                : 'bg-neutral-950 border-neutral-800/90 shadow-md'
            }`}
          >
            {/* Tier Title */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${tier.theme.dot}`} />
              <div>
                <h4 className={`text-base font-black ${isLight ? 'text-stone-900' : 'text-white'}`}>
                  {tier.name}
                </h4>
                <span className="text-[10px] text-stone-400 block">
                  {tier.englishTitle}
                </span>
              </div>
            </div>

            {/* The Two Discount Brackets Side by Side */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Bracket 1: تا ۳ تیکه */}
              <div className={`p-3 rounded-xl border text-center transition-all ${
                selectedColumn === 'fourPlus' ? 'opacity-40' : 'opacity-100'
              } ${
                isLight ? 'bg-stone-50 border-stone-200' : 'bg-neutral-900 border-neutral-800'
              }`}>
                <span className="text-[11px] text-stone-500 dark:text-neutral-400 block mb-0.5">
                  تا ۳ تیکه خرید
                </span>
                <span className={`text-2xl font-black tabular-nums block ${
                  isLight ? 'text-stone-800' : 'text-neutral-200'
                }`}>
                  {tier.upTo3}
                </span>
              </div>

              {/* Bracket 2: ۴ تیکه به بالا */}
              <div className={`p-3 rounded-xl border text-center transition-all ${
                selectedColumn === 'upTo3' ? 'opacity-40' : 'opacity-100'
              } ${
                isLight 
                  ? 'bg-rose-50/70 border-rose-200 text-rose-950' 
                  : 'bg-rose-950/40 border-rose-900 text-rose-200'
              }`}>
                <span className="text-[11px] font-bold block mb-0.5">
                  ۴ تیکه به بالا
                </span>
                <span className="text-2xl font-black tabular-nums text-rose-700 dark:text-rose-400 block">
                  {tier.fourPlus}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. DESKTOP & TABLET TABLE VIEW (Direct, spacious, 3 columns) */}
      {/* ------------------------------------------------------------- */}
      <div className={`hidden sm:block rounded-3xl border overflow-hidden transition-all duration-300 shadow-xl ${
        isLight
          ? 'bg-white border-stone-200/90 shadow-stone-200/40'
          : 'bg-neutral-950 border-neutral-800 shadow-2xl shadow-black'
      }`}>
        {/* Table Header Bar */}
        <div className={`grid grid-cols-12 px-6 sm:px-8 py-5 border-b text-xs sm:text-sm font-bold tracking-tight ${
          isLight ? 'bg-stone-50/80 border-stone-200 text-stone-600' : 'bg-neutral-900/60 border-neutral-800 text-neutral-400'
        }`}>
          {/* Column 1: Tier Name */}
          <div className="col-span-5 flex items-center gap-2">
            <span>سطح مشتریان</span>
          </div>

          {/* Column 2: Up to 3 Pieces */}
          <div className={`col-span-3 text-center transition-opacity ${
            selectedColumn === 'fourPlus' ? 'opacity-40' : 'opacity-100'
          }`}>
            <span className="block font-black text-stone-900 dark:text-white text-base">تا ۳ تیکه خرید</span>
            <span className="text-[10px] font-medium text-stone-400 dark:text-neutral-500">
              (۱ تا ۳ قلم)
            </span>
          </div>

          {/* Column 3: 4 and above */}
          <div className={`col-span-4 text-center transition-opacity ${
            selectedColumn === 'upTo3' ? 'opacity-40' : 'opacity-100'
          }`}>
            <span className="font-black text-stone-900 dark:text-white text-base block">۴ تیکه به بالا</span>
            <span className="text-[10px] font-bold text-rose-700 dark:text-rose-400">
              (سقف تخفیف رده)
            </span>
          </div>
        </div>

        {/* Tier Rows */}
        <div className={`divide-y transition-colors ${
          isLight ? 'divide-stone-100' : 'divide-neutral-800/80'
        }`}>
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`grid grid-cols-12 items-center px-6 sm:px-8 py-5 sm:py-6 transition-colors ${
                isLight ? 'hover:bg-stone-50/50' : 'hover:bg-neutral-900/30'
              }`}
            >
              {/* Column 1: Tier Identity */}
              <div className="col-span-5 flex items-center gap-3.5">
                <div className={`w-4 h-4 rounded-full shrink-0 ${tier.theme.dot}`} />
                <div>
                  <h4 className={`text-base sm:text-lg font-black tracking-tight ${
                    isLight ? 'text-stone-900' : 'text-white'
                  }`}>
                    {tier.name}
                  </h4>
                  <span className={`text-[11px] block mt-0.5 ${
                    isLight ? 'text-stone-400' : 'text-neutral-500'
                  }`}>
                    {tier.englishTitle}
                  </span>
                </div>
              </div>

              {/* Column 2: Up to 3 Pieces Percentage */}
              <div className={`col-span-3 text-center transition-all ${
                selectedColumn === 'fourPlus' ? 'opacity-40 scale-95' : 'opacity-100'
              }`}>
                <span className={`text-3xl sm:text-4xl font-black tabular-nums tracking-tight block ${
                  isLight ? 'text-stone-800' : 'text-neutral-200'
                }`}>
                  {tier.upTo3}
                </span>
              </div>

              {/* Column 3: 4 and above Percentage */}
              <div className={`col-span-4 text-center transition-all ${
                selectedColumn === 'upTo3' ? 'opacity-40 scale-95' : 'opacity-100'
              }`}>
                <span className={`text-3xl sm:text-4xl font-black tabular-nums tracking-tight ${
                  isLight ? 'text-rose-950 font-black' : 'text-rose-300 font-black'
                }`}>
                  {tier.fourPlus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Table Footer Notice */}
        <div className={`px-6 sm:px-8 py-3.5 border-t text-xs flex flex-col sm:flex-row items-center justify-between gap-2 ${
          isLight ? 'bg-stone-50/50 border-stone-200 text-stone-500' : 'bg-neutral-900/40 border-neutral-800 text-neutral-400'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
            <span>فروشگاه پوشاک لی لی کیدز · جشنواره شب یلدا</span>
          </div>
          <span className="text-[11px] text-stone-400">
            ۴ سطح · ۲ بازه خریدی
          </span>
        </div>
      </div>
    </div>
  );
};
