import React from 'react';
import { DISCOUNT_TIERS, toPersianDigits, formatToman } from '../data/tierData';
import { TierId } from '../types';
import { X, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface TierDetailModalProps {
  tierId: TierId | null;
  onClose: () => void;
  onSelectTier: (tierId: TierId) => void;
}

export const TierDetailModal: React.FC<TierDetailModalProps> = ({
  tierId,
  onClose,
  onSelectTier,
}) => {
  if (!tierId) return null;

  const tier = DISCOUNT_TIERS.find((t) => t.id === tierId) || DISCOUNT_TIERS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/50">
          <div className="flex items-center gap-2.5">
            <span
              className={`w-3.5 h-3.5 rounded-full border ${
                tier.id === 'white'
                  ? 'bg-white border-neutral-300'
                  : tier.id === 'green'
                  ? 'bg-emerald-500 border-emerald-600'
                  : tier.id === 'silver'
                  ? 'bg-slate-400 border-slate-500'
                  : 'bg-amber-400 border-amber-500'
              }`}
            />
            <h3 className="text-base font-bold text-neutral-900">
              مشخصات و مزایای {tier.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            {tier.description}
          </p>

          {/* Discount Matrix Highlights */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-center">
              <span className="text-[11px] text-neutral-500 block mb-1">
                تخفیف ۱ تا ۳ تیکه
              </span>
              <span className="text-2xl font-black text-neutral-900 font-mono">
                {toPersianDigits(tier.upTo3PiecesPercent)}٪
              </span>
            </div>

            <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200 text-center">
              <span className="text-[11px] text-emerald-800 font-semibold block mb-1 flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>تخفیف ۴ تیکه به بالا</span>
              </span>
              <span className="text-2xl font-black text-emerald-950 font-mono">
                {toPersianDigits(tier.fourAndAbovePercent)}٪
              </span>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
            <span className="text-xs font-bold text-neutral-500 block mb-1">
              شرایط دستیابی به این رده:
            </span>
            <span className="text-xs font-semibold text-neutral-800">
              {tier.minAnnualSpendToman === 0
                ? 'ثبت‌نام و اولین خرید بدون محدودیت سقف'
                : `مجموع خرید بیش از ${formatToman(tier.minAnnualSpendToman)} در یک سال`}
            </span>
          </div>

          {/* Benefits */}
          <div>
            <span className="text-xs font-bold text-neutral-500 block mb-2">
              امتیازات و سرویس‌های این سطح:
            </span>
            <ul className="space-y-2 text-xs text-neutral-700">
              {tier.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            انصراف
          </button>

          <button
            onClick={() => {
              onSelectTier(tier.id);
              onClose();
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>انتخاب به عنوان سطح فعال من</span>
          </button>
        </div>
      </div>
    </div>
  );
};
