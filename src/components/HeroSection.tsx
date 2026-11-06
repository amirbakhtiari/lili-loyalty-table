import React from 'react';
import { ArrowDown, Layers, Sliders, Sparkles, Check } from 'lucide-react';
import { toPersianDigits } from '../data/tierData';

interface HeroSectionProps {
  onOpenImageModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenImageModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-full border border-stone-200 text-xs font-medium text-neutral-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>جشنواره ویژه باشگاه مشتریان · فصل جاری</span>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-500 font-mono">تخفیف تا ۶۵٪</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight sm:leading-tight">
              جدول مدرن تخفیف‌های پلکانی{' '}
              <span className="text-neutral-400 font-normal block sm:inline">
                بر اساس تعداد تیکه و رده مشتری
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
              تمامی ۴ رده اعضا (سفید، سبز، نقره‌ای و طلایی) در دو سقف خریدی «تا ۳ تیکه» و «۴ تیکه به بالا» طراحی شده‌اند. با خرید ۴ تیکه، تخفیف فاکتور شما بلافاصله ۲۰٪ جهش پیدا خواهد کرد.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-neutral-900 font-mono block">
                  {toPersianDigits(4)}
                </span>
                <span className="text-[11px] text-neutral-500">سطح مشتریان</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-neutral-900 font-mono block">
                  ۳۰٪ تا ۶۵٪
                </span>
                <span className="text-[11px] text-neutral-500">دامنه تخفیف‌ها</span>
              </div>
              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 text-center">
                <span className="text-xl sm:text-2xl font-black text-emerald-800 font-mono block">
                  +۲۰٪
                </span>
                <span className="text-[11px] text-emerald-700 font-medium">جهش ۴ تیکه به بالا</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#matrix-table"
                className="py-3 px-5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Layers className="w-4 h-4" />
                <span>مشاهده جدول کامل تخفیف‌ها</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#calculator"
                className="py-3 px-4 bg-stone-100 hover:bg-stone-200 text-neutral-800 rounded-xl text-xs sm:text-sm font-semibold border border-stone-200 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-neutral-600" />
                <span>محاسبه‌گر تخفیف شما</span>
              </a>

              <button
                onClick={onOpenImageModal}
                className="py-3 px-3 text-xs text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>تطبیق با عکس اولیه</span>
              </button>
            </div>
          </div>

          {/* Side Editorial Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-stone-50 to-stone-100/80 rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  نمای خلاصه مقایسه‌ای
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                  پالت روشن و مدرن
                </span>
              </div>

              {/* Minimal preview strip */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-stone-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white border border-stone-300" />
                    <span className="font-bold text-neutral-800">مشتریان سفید</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono font-bold">
                    <span className="text-neutral-600">۳۰٪</span>
                    <span className="text-neutral-400">←</span>
                    <span className="text-neutral-950 font-black">۵۰٪</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-stone-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-bold text-neutral-800">مشتریان سبز</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono font-bold">
                    <span className="text-neutral-600">۳۵٪</span>
                    <span className="text-neutral-400">←</span>
                    <span className="text-neutral-950 font-black">۵۵٪</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-stone-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <span className="font-bold text-neutral-800">مشتریان نقره‌ای</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono font-bold">
                    <span className="text-neutral-600">۴۰٪</span>
                    <span className="text-neutral-400">←</span>
                    <span className="text-neutral-950 font-black">۶۰٪</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-amber-50/70 rounded-xl border border-amber-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="font-bold text-amber-950">مشتریان طلایی</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono font-bold">
                    <span className="text-neutral-600">۴۵٪</span>
                    <span className="text-neutral-400">←</span>
                    <span className="text-amber-900 font-black">۶۵٪</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-neutral-500 pt-2 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>ستون سمت چپ: تا ۳ تیکه | ستون سمت راست: ۴ تیکه به بالا</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
