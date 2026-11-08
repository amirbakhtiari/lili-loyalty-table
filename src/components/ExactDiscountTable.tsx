import React, { useState } from 'react';
import { Zap } from 'lucide-react';

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
    border: string;
    badgeBg: string;
    badgeText: string;
  };
}

const TIERS: TierInfo[] = [
  {
    id: 'white',
    name: 'مشتریان سفید',
    englishTitle: 'White Tier · سطح پایه',
    upTo3: '۳۰٪',
    fourPlus: '۵۰٪',
    theme: {
      dot: 'bg-white border-2 border-neutral-400 shadow-xs',
      border: 'border-neutral-800',
      badgeBg: 'bg-white/10 text-white',
      badgeText: 'text-neutral-200',
    },
  },
  {
    id: 'green',
    name: 'مشتریان سبز',
    englishTitle: 'Green Tier · سطح برگزیده',
    upTo3: '۳۵٪',
    fourPlus: '۵۵٪',
    theme: {
      dot: 'bg-emerald-400 border-emerald-500 shadow-xs shadow-emerald-400/50',
      border: 'border-emerald-900/50',
      badgeBg: 'bg-emerald-500/15 text-emerald-400',
      badgeText: 'text-emerald-300',
    },
  },
  {
    id: 'silver',
    name: 'مشتریان نقره ای',
    englishTitle: 'Silver Tier · سطح پریمیوم',
    upTo3: '۴۰٪',
    fourPlus: '۶۰٪',
    theme: {
      dot: 'bg-gradient-to-tr from-slate-300 to-slate-100 border-slate-300 shadow-xs',
      border: 'border-slate-800',
      badgeBg: 'bg-slate-500/15 text-slate-300',
      badgeText: 'text-slate-200',
    },
  },
  {
    id: 'gold',
    name: 'مشتریان طلایی',
    englishTitle: 'Gold VIP · بالاترین سطح',
    upTo3: '۴۵٪',
    fourPlus: '۶۵٪',
    theme: {
      dot: 'bg-gradient-to-tr from-yellow-400 to-amber-500 border-yellow-300 shadow-xs shadow-yellow-400/60',
      border: 'border-yellow-900/50',
      badgeBg: 'bg-yellow-400/15 text-yellow-400',
      badgeText: 'text-yellow-300',
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
          <div className="flex items-center gap-1.5 text-xs font-black text-yellow-400 mb-0.5">
            <Zap className="w-3.5 h-3.5 fill-current text-yellow-400" />
            <span className="uppercase tracking-wider">BLACK FRIDAY DEALS</span>
            <span className="text-neutral-600">·</span>
            <span>۴ رده مشتریان</span>
          </div>
          <h3 className={`text-lg sm:text-2xl font-black ${isLight ? 'text-stone-900' : 'text-white'}`}>
            جدول رسمی تخفیف‌های بلک فرایدی
          </h3>
        </div>

        {/* Quick Filter: All vs Up to 3 vs 4+ */}
        <div className="p-1 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-1 self-start sm:self-auto">
          <button
            onClick={() => setSelectedColumn('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedColumn === 'all'
                ? 'bg-yellow-400 text-black shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            همه ستون‌ها
          </button>
          <button
            onClick={() => setSelectedColumn('upTo3')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedColumn === 'upTo3'
                ? 'bg-yellow-400 text-black shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            تا ۳ تیکه خرید
          </button>
          <button
            onClick={() => setSelectedColumn('fourPlus')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              selectedColumn === 'fourPlus'
                ? 'bg-yellow-400 text-black shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Zap className="w-3 h-3 fill-current" />
            <span>۴ تیکه به بالا</span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 1. MOBILE CARDS VIEW (Black Friday Matte Cards) */}
      {/* ------------------------------------------------------------- */}
      <div className="block sm:hidden space-y-3 mb-5">
        {TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`p-4 rounded-2xl border transition-all ${
              isLight
                ? 'bg-white border-neutral-200 shadow-sm'
                : 'bg-[#111116] border-neutral-800/90 shadow-md'
            }`}
          >
            {/* Tier Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${tier.theme.dot}`} />
                <div>
                  <h4 className={`text-base font-black ${isLight ? 'text-stone-900' : 'text-white'}`}>
                    {tier.name}
                  </h4>
                  <span className="text-[10px] text-neutral-400 block">
                    {tier.englishTitle}
                  </span>
                </div>
              </div>

              <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                tier.id === 'gold' 
                  ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/40' 
                  : isLight ? 'bg-neutral-100 text-neutral-700' : 'bg-neutral-800 text-neutral-300'
              }`}>
                BLACK FRIDAY
              </span>
            </div>

            {/* The Two Discount Brackets Side by Side */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Bracket 1: تا ۳ تیکه */}
              <div className={`p-3 rounded-xl border text-center transition-all ${
                selectedColumn === 'fourPlus' ? 'opacity-40' : 'opacity-100'
              } ${
                isLight ? 'bg-stone-50 border-stone-200' : 'bg-neutral-900/80 border-neutral-800'
              }`}>
                <span className="text-[11px] text-neutral-400 block mb-0.5">
                  تا ۳ تیکه خرید
                </span>
                <span className={`text-2xl font-black tabular-nums block ${
                  isLight ? 'text-stone-900' : 'text-white'
                }`}>
                  {tier.upTo3}
                </span>
                <span className="text-[10px] text-neutral-400">تخفیف پایه</span>
              </div>

              {/* Bracket 2: ۴ تیکه به بالا */}
              <div className={`p-3 rounded-xl border text-center transition-all relative overflow-hidden ${
                selectedColumn === 'upTo3' ? 'opacity-40' : 'opacity-100'
              } ${
                isLight 
                  ? 'bg-neutral-900 border-neutral-800 text-white' 
                  : 'bg-black border-yellow-400/40 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.1)]'
              }`}>
                <span className={`text-[11px] font-bold block mb-0.5 ${
                  isLight ? 'text-yellow-400' : 'text-yellow-400'
                }`}>
                  ۴ تیکه به بالا ⚡
                </span>
                <span className={`text-2xl font-black tabular-nums block ${
                  isLight ? 'text-white' : 'text-yellow-400'
                }`}>
                  {tier.fourPlus}
                </span>
                <span className="text-[10px] font-semibold text-neutral-400">
                  حداکثر تخفیف
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. DESKTOP & TABLET TABLE VIEW (Black Friday Obsidian Table) */}
      {/* ------------------------------------------------------------- */}
      <div className={`hidden sm:block rounded-3xl border overflow-hidden transition-all duration-300 shadow-xl ${
        isLight
          ? 'bg-white border-neutral-200 shadow-stone-200/50'
          : 'bg-[#101015] border-neutral-800 shadow-2xl shadow-black'
      }`}>
        {/* Table Header Bar */}
        <div className={`grid grid-cols-12 px-6 sm:px-8 py-5 border-b text-xs sm:text-sm font-bold tracking-tight ${
          isLight ? 'bg-stone-50 border-stone-200 text-stone-700' : 'bg-black/60 border-neutral-800 text-neutral-300'
        }`}>
          {/* Column 1: Tier Name */}
          <div className="col-span-5 flex items-center gap-2">
            <span>سطح مشتریان</span>
          </div>

          {/* Column 2: Up to 3 Pieces */}
          <div className={`col-span-3 text-center transition-opacity ${
            selectedColumn === 'fourPlus' ? 'opacity-40' : 'opacity-100'
          }`}>
            <span className={`block font-black text-base ${isLight ? 'text-stone-900' : 'text-white'}`}>
              تا ۳ تیکه خرید
            </span>
            <span className="text-[10px] font-medium text-neutral-400">
              (۱ تا ۳ قلم)
            </span>
          </div>

          {/* Column 3: 4 and above */}
          <div className={`col-span-4 text-center transition-opacity ${
            selectedColumn === 'upTo3' ? 'opacity-40' : 'opacity-100'
          }`}>
            <div className="flex items-center justify-center gap-1.5">
              <Zap className="w-4 h-4 text-yellow-400 fill-current" />
              <span className={`font-black text-base ${isLight ? 'text-stone-900' : 'text-white'}`}>
                ۴ تیکه به بالا
              </span>
            </div>
            <span className="text-[10px] font-bold text-yellow-500 dark:text-yellow-400">
              ویژه بلک فرایدی
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
                isLight ? 'hover:bg-stone-50/70' : 'hover:bg-white/5'
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
                  <span className="text-[11px] block mt-0.5 text-neutral-400">
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
                  isLight ? 'text-yellow-600 font-black' : 'text-yellow-400 font-black'
                }`}>
                  {tier.fourPlus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Table Footer Notice */}
        <div className={`px-6 sm:px-8 py-3.5 border-t text-xs flex flex-col sm:flex-row items-center justify-between gap-2 ${
          isLight ? 'bg-stone-50 border-stone-200 text-stone-500' : 'bg-black/50 border-neutral-800 text-neutral-400'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span>فروشگاه پوشاک لی لی کیدز · بزرگ‌ترین حراج بلک فرایدی سال</span>
          </div>
          <span className="text-[11px] text-neutral-400 font-mono">
            BLACK FRIDAY SPECIAL
          </span>
        </div>
      </div>
    </div>
  );
};
