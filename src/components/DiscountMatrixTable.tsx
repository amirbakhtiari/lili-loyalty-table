import React, { useState } from 'react';
import { DISCOUNT_TIERS, toPersianDigits } from '../data/tierData';
import { TierId } from '../types';
import { Check, ArrowUpRight, LayoutGrid, TableProperties, Sparkles, HelpCircle } from 'lucide-react';

interface DiscountMatrixTableProps {
  selectedTier: TierId;
  onSelectTier: (tier: TierId) => void;
  onOpenPerksModal: (tierId: TierId) => void;
}

export const DiscountMatrixTable: React.FC<DiscountMatrixTableProps> = ({
  selectedTier,
  onSelectTier,
  onOpenPerksModal,
}) => {
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  return (
    <section id="matrix-table" className="py-8 sm:py-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-1.5">
              <span>قوانین رسمی تخفیف پلکانی</span>
              <span>·</span>
              <span>پالت مدرن و روشن</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              جدول جامع تخفیف‌های باشگاه مشتریان
            </h2>
            <p className="mt-1 text-sm text-neutral-600 max-w-2xl">
              تخفیف‌های استثنایی بر اساس رده عضویت و تعداد تیکه خرید. با انتخاب ۴ تیکه به بالا، تخفیف شما به صورت آنی ۲۰٪ جهش پیدا می‌کند.
            </p>
          </div>

          {/* View Mode Toggle & Mobile Helper */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <TableProperties className="w-3.5 h-3.5" />
              <span>نمای جدولی</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>نمای کارت‌ها</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Table Presentation (Exact structure from reference image, in high-end light styling) */}
        {viewMode === 'table' ? (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50/80">
                    <th scope="col" className="py-4 px-6 text-sm font-bold text-neutral-700 w-2/5">
                      سطح مشتریان
                    </th>
                    <th scope="col" className="py-4 px-6 text-sm font-bold text-neutral-800 w-3/10 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <span>تا ۳ تیکه خرید</span>
                        <span className="text-[11px] font-normal text-neutral-500">(۱ الی ۳ قلم)</span>
                      </div>
                    </th>
                    <th scope="col" className="py-4 px-6 text-sm font-bold text-neutral-900 w-3/10 text-center bg-stone-100/70 border-r border-stone-200">
                      <div className="flex items-center justify-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>۴ تیکه به بالا</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          +۲۰٪ جهش
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {DISCOUNT_TIERS.map((tier) => {
                    const isSelected = selectedTier === tier.id;
                    return (
                      <tr
                        key={tier.id}
                        onClick={() => onSelectTier(tier.id)}
                        className={`transition-colors cursor-pointer group ${
                          isSelected
                            ? 'bg-neutral-50/90'
                            : 'hover:bg-stone-50/60'
                        }`}
                      >
                        {/* Tier Name Column */}
                        <td className="py-5 px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {/* Visual Indicator Marker */}
                              <div
                                className={`w-3.5 h-3.5 rounded-full border shadow-2xs ${
                                  tier.id === 'white'
                                    ? 'bg-white border-neutral-300'
                                    : tier.id === 'green'
                                    ? 'bg-emerald-500 border-emerald-600'
                                    : tier.id === 'silver'
                                    ? 'bg-slate-400 border-slate-500'
                                    : 'bg-amber-400 border-amber-500'
                                }`}
                              />
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-base sm:text-lg font-bold text-neutral-900">
                                    {tier.name}
                                  </span>
                                  {isSelected && (
                                    <span className="text-[11px] font-medium text-neutral-600 bg-neutral-200/70 px-2 py-0.5 rounded-md">
                                      سطح انتخابی شما
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs text-neutral-500 hidden sm:block">
                                  {tier.description}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenPerksModal(tier.id);
                              }}
                              className="text-xs text-neutral-400 hover:text-neutral-800 p-1.5 rounded-md hover:bg-stone-200/50 transition-colors flex items-center gap-1"
                              title="مشاهده مزایا و شرایط ارتقا"
                            >
                              <HelpCircle className="w-3.5 h-3.5" />
                              <span className="hidden lg:inline text-[11px]">شرایط ارتقا</span>
                            </button>
                          </div>
                        </td>

                        {/* Up to 3 pieces discount percentage */}
                        <td className="py-5 px-6 text-center">
                          <div className="inline-flex flex-col items-center">
                            <span className="text-2xl sm:text-3xl font-black text-neutral-800 tabular-nums font-mono tracking-tight">
                              {toPersianDigits(tier.upTo3PiecesPercent)}٪
                            </span>
                            <span className="text-[11px] text-neutral-400 mt-0.5">
                              برای خرید ۱ تا ۳ تیکه
                            </span>
                          </div>
                        </td>

                        {/* 4 and above pieces discount percentage */}
                        <td className="py-5 px-6 text-center bg-stone-50/40 border-r border-stone-200">
                          <div className="inline-flex flex-col items-center">
                            <div className="flex items-center gap-1">
                              <span className="text-2xl sm:text-3xl font-black text-neutral-900 tabular-nums font-mono tracking-tight">
                                {toPersianDigits(tier.fourAndAbovePercent)}٪
                              </span>
                            </div>
                            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-full mt-1 border border-emerald-100">
                              سقف تخفیف این رده
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Table Footer Helper Note */}
            <div className="px-6 py-3.5 bg-stone-50/80 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  برای انتخاب و تست تخفیف هر سطح در شبیه‌ساز خرید، روی ردیف مربوطه کلیک نمایید.
                </span>
              </div>
              <span className="text-neutral-400 text-[11px]">
                برگرفته از جدول تعرفه رسمی با تطابق ۱۰۰٪ مقادیر
              </span>
            </div>
          </div>
        ) : (
          /* View Mode 2: Card Presentation (Optimized for Mobile and Touch) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {DISCOUNT_TIERS.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => onSelectTier(tier.id)}
                  className={`relative p-5 rounded-2xl bg-white border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-neutral-900 shadow-md ring-2 ring-neutral-900/10'
                      : 'border-stone-200 hover:border-stone-300 hover:shadow-xs'
                  }`}
                >
                  <div>
                    {/* Tier Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full border ${
                            tier.id === 'white'
                              ? 'bg-white border-neutral-300'
                              : tier.id === 'green'
                              ? 'bg-emerald-500 border-emerald-600'
                              : tier.id === 'silver'
                              ? 'bg-slate-400 border-slate-500'
                              : 'bg-amber-400 border-amber-500'
                          }`}
                        />
                        <h3 className="text-lg font-bold text-neutral-900">
                          {tier.name}
                        </h3>
                      </div>
                      {isSelected && (
                        <span className="text-[10px] font-bold text-white bg-neutral-900 px-2 py-0.5 rounded-full">
                          فعال
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-neutral-500 mb-5 leading-relaxed line-clamp-2">
                      {tier.description}
                    </p>

                    {/* Both discount metrics */}
                    <div className="space-y-3 mb-5">
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between">
                        <span className="text-xs text-neutral-600 font-medium">
                          تا ۳ تیکه خرید
                        </span>
                        <span className="text-xl font-black text-neutral-800 font-mono">
                          {toPersianDigits(tier.upTo3PiecesPercent)}٪
                        </span>
                      </div>

                      <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/70 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-neutral-900 font-bold block">
                            ۴ تیکه به بالا
                          </span>
                          <span className="text-[10px] text-emerald-700 font-semibold">
                            +۲۰٪ جهش تخفیف
                          </span>
                        </div>
                        <span className="text-2xl font-black text-neutral-950 font-mono">
                          {toPersianDigits(tier.fourAndAbovePercent)}٪
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenPerksModal(tier.id);
                      }}
                      className="text-xs text-neutral-500 hover:text-neutral-900 font-medium flex items-center gap-1"
                    >
                      <span>مزایای رده</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-semibold text-neutral-800">
                      {isSelected ? 'انتخاب شده' : 'کلیک برای انتخاب'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
