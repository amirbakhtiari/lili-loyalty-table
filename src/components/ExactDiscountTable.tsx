import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronDown, 
  Check, 
  Gift, 
  Truck, 
  ShieldCheck, 
  Star,
  Maximize2,
  Minimize2,
  Crown,
  Heart,
  ShoppingBag
} from 'lucide-react';

interface ExactDiscountTableProps {
  themeMode: 'light' | 'dark';
}

interface TierInfo {
  id: string;
  name: string;
  englishTitle: string;
  upTo3: string;
  upTo3Num: number;
  fourPlus: string;
  fourPlusNum: number;
  qualifyingSpend: string;
  perks: {
    icon: 'gift' | 'truck' | 'star' | 'heart' | 'crown';
    text: string;
  }[];
  palette: {
    badgeLight: string;
    badgeDark: string;
    accentLight: string;
    accentDark: string;
    borderLight: string;
    borderDark: string;
    glowLight: string;
    glowDark: string;
    tagLight: string;
    tagDark: string;
  };
}

const TIERS: TierInfo[] = [
  {
    id: 'white',
    name: 'مشتریان سفید',
    englishTitle: 'White Tier · سطح پایه',
    upTo3: '۳۰٪',
    upTo3Num: 30,
    fourPlus: '۵۰٪',
    fourPlusNum: 50,
    qualifyingSpend: 'عضویت خودکار پس از اولین خرید بدون حداقل سقف',
    palette: {
      badgeLight: 'bg-stone-100 text-stone-800 border-stone-200',
      badgeDark: 'bg-neutral-800 text-neutral-200 border-neutral-700',
      accentLight: 'text-stone-700',
      accentDark: 'text-stone-300',
      borderLight: 'border-stone-200',
      borderDark: 'border-neutral-800',
      glowLight: 'hover:border-stone-400',
      glowDark: 'hover:border-neutral-600',
      tagLight: 'bg-stone-100 text-stone-700',
      tagDark: 'bg-neutral-800 text-neutral-300',
    },
    perks: [
      { icon: 'star', text: '۳۰٪ تخفیف قطعی برای خرید ۱ تا ۳ تیکه' },
      { icon: 'gift', text: '۵۰٪ تخفیف استثنایی برای خریدهای ۴ تیکه به بالا' },
      { icon: 'heart', text: 'عضویت دائمی در باشگاه مشتریان لیلی کیدز' },
      { icon: 'truck', text: 'بسته‌بندی پاکیزه و استاندارد بوتیک' },
    ],
  },
  {
    id: 'green',
    name: 'مشتریان سبز',
    englishTitle: 'Green Tier · سطح برگزیده',
    upTo3: '۳۵٪',
    upTo3Num: 35,
    fourPlus: '۵۵٪',
    fourPlusNum: 55,
    qualifyingSpend: 'مجموع خرید حداقل ۴ میلیون تومان طی ۱۲ ماه گذشته',
    palette: {
      badgeLight: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      badgeDark: 'bg-emerald-950/70 text-emerald-300 border-emerald-800',
      accentLight: 'text-emerald-700',
      accentDark: 'text-emerald-400',
      borderLight: 'border-emerald-200/80',
      borderDark: 'border-emerald-900/60',
      glowLight: 'hover:border-emerald-400',
      glowDark: 'hover:border-emerald-600',
      tagLight: 'bg-emerald-50 text-emerald-800',
      tagDark: 'bg-emerald-950/60 text-emerald-300',
    },
    perks: [
      { icon: 'star', text: '۳۵٪ تخفیف خرید ۱ تا ۳ تیکه پوشاک کودک' },
      { icon: 'gift', text: '۵۵٪ تخفیف خریدهای ۴ تیکه به بالا' },
      { icon: 'truck', text: 'ارسال کاملاً رایگان برای سفارش‌های ۴ تیکه به بالا' },
      { icon: 'heart', text: 'دعوت به پیش‌فروش کالکشن‌های فصلی و نوروزی' },
    ],
  },
  {
    id: 'silver',
    name: 'مشتریان نقره ای',
    englishTitle: 'Silver Tier · سطح پریمیوم',
    upTo3: '۴۰٪',
    upTo3Num: 40,
    fourPlus: '۶۰٪',
    fourPlusNum: 60,
    qualifyingSpend: 'مجموع خرید حداقل ۹ میلیون تومان طی ۱۲ ماه گذشته',
    palette: {
      badgeLight: 'bg-slate-100 text-slate-800 border-slate-200',
      badgeDark: 'bg-slate-800 text-slate-200 border-slate-700',
      accentLight: 'text-slate-700',
      accentDark: 'text-slate-300',
      borderLight: 'border-slate-200',
      borderDark: 'border-slate-800',
      glowLight: 'hover:border-slate-400',
      glowDark: 'hover:border-slate-600',
      tagLight: 'bg-slate-100 text-slate-700',
      tagDark: 'bg-slate-800 text-slate-300',
    },
    perks: [
      { icon: 'star', text: '۴۰٪ تخفیف خرید ۱ تا ۳ تیکه' },
      { icon: 'gift', text: '۶۰٪ تخفیف خریدهای ۴ تیکه به بالا' },
      { icon: 'truck', text: 'ارسال اکسپرس رایگان سراسری بدون حداقل خرید' },
      { icon: 'heart', text: 'هدیه ویژه روز تولد فرزند و سالگرد عضویت VIP' },
    ],
  },
  {
    id: 'gold',
    name: 'مشتریان طلایی',
    englishTitle: 'Gold VIP · بالاترین سطح',
    upTo3: '۴۵٪',
    upTo3Num: 45,
    fourPlus: '۶۵٪',
    fourPlusNum: 65,
    qualifyingSpend: 'مجموع خرید حداقل ۱۸ میلیون تومان طی ۱۲ ماه گذشته',
    palette: {
      badgeLight: 'bg-amber-50 text-amber-900 border-amber-200',
      badgeDark: 'bg-amber-950/70 text-amber-200 border-amber-800',
      accentLight: 'text-amber-800',
      accentDark: 'text-amber-300',
      borderLight: 'border-amber-200/80',
      borderDark: 'border-amber-900/60',
      glowLight: 'hover:border-amber-400',
      glowDark: 'hover:border-amber-600',
      tagLight: 'bg-amber-50 text-amber-900',
      tagDark: 'bg-amber-950/60 text-amber-200',
    },
    perks: [
      { icon: 'crown', text: '۴۵٪ تخفیف خرید ۱ تا ۳ تیکه (بالاترین تعرفه پایه)' },
      { icon: 'gift', text: '۶۵٪ تخفیف خریدهای ۴ تیکه به بالا (سقف تخفیف باشگاه)' },
      { icon: 'star', text: 'بسته‌بندی کادویی لوکس و تعویض سایز تا ۴۵ روز' },
      { icon: 'heart', text: 'مشاوره اختصاصی استایلیست شخصی لباس کودک' },
    ],
  },
];

export const ExactDiscountTable: React.FC<ExactDiscountTableProps> = ({ themeMode }) => {
  const [expandedTierId, setExpandedTierId] = useState<string | null>('gold');
  const [selectedColumn, setSelectedColumn] = useState<'all' | 'upTo3' | 'fourPlus'>('all');
  const [isAllExpanded, setIsAllExpanded] = useState<boolean>(false);

  const isLight = themeMode === 'light';

  const toggleTier = (id: string) => {
    if (isAllExpanded) {
      setIsAllExpanded(false);
      setExpandedTierId(expandedTierId === id ? null : id);
    } else {
      setExpandedTierId(expandedTierId === id ? null : id);
    }
  };

  const toggleExpandAll = () => {
    setIsAllExpanded(!isAllExpanded);
    if (!isAllExpanded) {
      setExpandedTierId(null);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8 sm:py-14 px-4 sm:px-6">
      {/* Editorial Title & Column Focus Filter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>باشگاه مشتریان لیلی کیدز</span>
            <span>·</span>
            <span>آیین‌نامه تخفیف</span>
          </div>
          <h2 className={`text-2xl sm:text-4xl font-black tracking-tight ${isLight ? 'text-stone-900' : 'text-white'}`}>
            جدول سطوح و درصدهای تخفیف
          </h2>
          <p className={`mt-1.5 text-xs sm:text-sm max-w-xl leading-relaxed ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>
            بر اساس رده عضویت شما و تعداد تیکه خرید، درصد تخفیف به صورت خودکار اعمال می‌شود. با خرید ۴ تیکه به بالا، تخفیف شما ۲۰٪ افزایش می‌یابد.
          </p>
        </div>

        {/* Filter & Expand All Toolbar */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          {/* Column Highlight Filter */}
          <div className={`p-1 rounded-xl border flex items-center gap-1 ${
            isLight ? 'bg-stone-100/90 border-stone-200' : 'bg-neutral-900 border-neutral-800'
          }`}>
            <button
              onClick={() => setSelectedColumn('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedColumn === 'all'
                  ? isLight
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'bg-neutral-800 text-white shadow-2xs'
                  : isLight ? 'text-stone-600 hover:text-stone-900' : 'text-neutral-400 hover:text-white'
              }`}
            >
              همه ستون‌ها
            </button>
            <button
              onClick={() => setSelectedColumn('upTo3')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedColumn === 'upTo3'
                  ? isLight
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'bg-neutral-800 text-white shadow-2xs'
                  : isLight ? 'text-stone-600 hover:text-stone-900' : 'text-neutral-400 hover:text-white'
              }`}
            >
              تا ۳ تیکه
            </button>
            <button
              onClick={() => setSelectedColumn('fourPlus')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                selectedColumn === 'fourPlus'
                  ? isLight
                    ? 'bg-white text-emerald-800 shadow-2xs font-bold'
                    : 'bg-emerald-950/80 text-emerald-300 shadow-2xs font-bold'
                  : isLight ? 'text-stone-600 hover:text-stone-900' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>۴ تیکه به بالا</span>
            </button>
          </div>

          {/* Expand / Collapse All Button */}
          <button
            onClick={toggleExpandAll}
            className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 cursor-pointer ${
              isLight
                ? 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200 shadow-2xs'
                : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border-neutral-800 shadow-2xs'
            }`}
          >
            {isAllExpanded ? (
              <>
                <Minimize2 className="w-3.5 h-3.5" />
                <span>بستن همه</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                <span>باز کردن همه</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* The Redesigned Table / Tier Showcase */}
      <div className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
        isLight
          ? 'bg-white border-stone-200/90 shadow-xl shadow-stone-200/40'
          : 'bg-neutral-950 border-neutral-800 shadow-2xl shadow-black'
      }`}>
        {/* Table Header Bar */}
        <div className={`grid grid-cols-12 px-5 sm:px-8 py-4 sm:py-5 border-b text-xs sm:text-sm font-bold tracking-tight ${
          isLight ? 'bg-stone-50/70 border-stone-200 text-stone-600' : 'bg-neutral-900/60 border-neutral-800 text-neutral-400'
        }`}>
          {/* Column 1: Tier Name */}
          <div className="col-span-6 sm:col-span-5 flex items-center gap-2">
            <span>سطح مشتریان</span>
            <span className="text-[11px] font-normal text-stone-400 dark:text-neutral-500 hidden sm:inline">
              (برای مشاهده مزایا کلیک کنید)
            </span>
          </div>

          {/* Column 2: Up to 3 Pieces */}
          <div className={`col-span-3 sm:col-span-3 text-center transition-opacity ${
            selectedColumn === 'fourPlus' ? 'opacity-40' : 'opacity-100'
          }`}>
            <span className="block font-black text-stone-900 dark:text-white">تا ۳ تیکه خرید</span>
            <span className="text-[10px] font-medium text-stone-400 dark:text-neutral-500 hidden sm:block">
              (۱ تا ۳ قلم)
            </span>
          </div>

          {/* Column 3: 4 and above */}
          <div className={`col-span-3 sm:col-span-4 text-center transition-opacity ${
            selectedColumn === 'upTo3' ? 'opacity-40' : 'opacity-100'
          }`}>
            <div className="flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-black text-stone-900 dark:text-white">۴ تیکه به بالا</span>
            </div>
            <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 hidden sm:inline">
              +۲۰٪ تخفیف مضاعف
            </span>
          </div>
        </div>

        {/* Tier Rows */}
        <div className={`divide-y transition-colors ${
          isLight ? 'divide-stone-100' : 'divide-neutral-800/80'
        }`}>
          {TIERS.map((tier) => {
            const isExpanded = isAllExpanded || expandedTierId === tier.id;

            return (
              <div key={tier.id} className="transition-colors group">
                {/* Main Row Surface */}
                <div
                  onClick={() => toggleTier(tier.id)}
                  className={`grid grid-cols-12 items-center px-5 sm:px-8 py-5 sm:py-6 cursor-pointer select-none transition-all duration-200 ${
                    isExpanded
                      ? isLight ? 'bg-stone-50/70' : 'bg-neutral-900/50'
                      : isLight ? 'hover:bg-stone-50/50' : 'hover:bg-neutral-900/30'
                  }`}
                >
                  {/* Column 1: Tier Identity */}
                  <div className="col-span-6 sm:col-span-5 flex items-center gap-3.5">
                    {/* Visual Dot / Gem */}
                    <div className={`w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full shrink-0 border transition-transform duration-300 group-hover:scale-125 ${
                      tier.id === 'white'
                        ? 'bg-white border-stone-300 shadow-2xs'
                        : tier.id === 'green'
                        ? 'bg-emerald-500 border-emerald-600 shadow-xs shadow-emerald-500/50'
                        : tier.id === 'silver'
                        ? 'bg-gradient-to-tr from-slate-400 to-slate-200 border-slate-400 shadow-2xs'
                        : 'bg-gradient-to-tr from-amber-500 to-yellow-300 border-amber-400 shadow-xs shadow-amber-500/50'
                    }`} />

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`text-sm sm:text-lg font-black tracking-tight ${
                          isLight ? 'text-stone-900' : 'text-white'
                        }`}>
                          {tier.name}
                        </h3>
                        <div className={`p-1 rounded-md transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-stone-900 dark:text-white' : 'text-stone-400'
                        }`}>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <span className={`text-[11px] block mt-0.5 ${
                        isLight ? 'text-stone-400' : 'text-neutral-500'
                      }`}>
                        {tier.englishTitle}
                      </span>
                    </div>
                  </div>

                  {/* Column 2: Up to 3 Pieces Percentage */}
                  <div className={`col-span-3 sm:col-span-3 text-center transition-all ${
                    selectedColumn === 'fourPlus' ? 'opacity-40 scale-95' : 'opacity-100'
                  }`}>
                    <span className={`text-2xl sm:text-4xl font-black tabular-nums tracking-tight block ${
                      isLight ? 'text-stone-800' : 'text-neutral-200'
                    }`}>
                      {tier.upTo3}
                    </span>
                    <span className="text-[10px] text-stone-400 dark:text-neutral-500 hidden sm:inline">
                      تخفیف پایه
                    </span>
                  </div>

                  {/* Column 3: 4 and above Percentage */}
                  <div className={`col-span-3 sm:col-span-4 text-center transition-all ${
                    selectedColumn === 'upTo3' ? 'opacity-40 scale-95' : 'opacity-100'
                  }`}>
                    <div className="inline-flex flex-col items-center">
                      <span className={`text-2xl sm:text-4xl font-black tabular-nums tracking-tight ${
                        isLight ? 'text-stone-950 font-black' : 'text-white font-black'
                      }`}>
                        {tier.fourPlus}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 border hidden sm:inline-block ${
                        tier.id === 'gold'
                          ? isLight ? 'bg-amber-100 text-amber-900 border-amber-200' : 'bg-amber-950/70 text-amber-300 border-amber-800'
                          : isLight ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-emerald-950/70 text-emerald-300 border-emerald-800'
                      }`}>
                        حداکثر سقف تخفیف
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Accordion Card */}
                {isExpanded && (
                  <div className={`px-5 sm:px-8 pb-6 pt-2 animate-in fade-in duration-200 ${
                    isLight ? 'bg-stone-50/70' : 'bg-neutral-900/50'
                  }`}>
                    <div className={`p-4 sm:p-6 rounded-2xl border transition-all ${
                      isLight
                        ? 'bg-white border-stone-200/90 shadow-xs'
                        : 'bg-neutral-950 border-neutral-800/90 shadow-md'
                    }`}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                        {/* Requirements and Club Perks */}
                        <div className="lg:col-span-8 space-y-4">
                          {/* Criteria Badge */}
                          <div className="flex items-start gap-2.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-0.5">
                                شرط عضویت و حفظ سطح:
                              </span>
                              <p className={`text-xs sm:text-sm font-semibold ${
                                isLight ? 'text-stone-800' : 'text-neutral-200'
                              }`}>
                                {tier.qualifyingSpend}
                              </p>
                            </div>
                          </div>

                          {/* Exclusive Perks List */}
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2.5">
                              مزایای انحصاری در بوتیک لیلی کیدز:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                              {tier.perks.map((perk, pIdx) => (
                                <div
                                  key={pIdx}
                                  className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                                    isLight
                                      ? 'bg-stone-50/70 border-stone-200/70 text-stone-700'
                                      : 'bg-neutral-900/70 border-neutral-800 text-neutral-300'
                                  }`}
                                >
                                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                  <span className="leading-snug">{perk.text}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Visual Comparison Box */}
                        <div className={`lg:col-span-4 p-4 rounded-xl border space-y-3 ${
                          isLight
                            ? 'bg-stone-50/80 border-stone-200/80'
                            : 'bg-neutral-900/80 border-neutral-800'
                        }`}>
                          <span className="text-[11px] font-bold text-stone-500 dark:text-neutral-400 block">
                            مقایسه سود شما در این رده:
                          </span>

                          <div className="flex items-center justify-between text-xs pb-2 border-b border-stone-200/60 dark:border-neutral-800">
                            <span className="text-stone-600 dark:text-neutral-400">تا ۳ تیکه خرید:</span>
                            <span className="font-black tabular-nums text-base text-stone-900 dark:text-white">
                              {tier.upTo3}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-xs pb-1">
                            <div>
                              <span className="font-bold text-stone-900 dark:text-white block">۴ تیکه به بالا:</span>
                              <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">+۲۰٪ سود بیشتر</span>
                            </div>
                            <span className="font-black tabular-nums text-lg text-emerald-700 dark:text-emerald-400">
                              {tier.fourPlus}
                            </span>
                          </div>

                          <button
                            onClick={() => toggleTier(tier.id)}
                            className={`w-full py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
                              isLight
                                ? 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
                                : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border-neutral-700'
                            }`}
                          >
                            بستن جزئیات این رده
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet Table Footer Notice */}
        <div className={`px-5 sm:px-8 py-3.5 border-t text-xs flex flex-col sm:flex-row items-center justify-between gap-2 ${
          isLight ? 'bg-stone-50/50 border-stone-200 text-stone-500' : 'bg-neutral-900/40 border-neutral-800 text-neutral-400'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>تمامی درصدها و رده‌ها دقیقاً منطبق بر آیین‌نامه رسمی باشگاه مشتریان لیلی کیدز پیاده‌سازی شده‌اند.</span>
          </div>
          <span className="text-[11px] text-stone-400">
            ۴ سطح · ۲ بازه خریدی
          </span>
        </div>
      </div>
    </div>
  );
};
