import React from 'react';
import { DISCOUNT_TIERS, formatToman, toPersianDigits } from '../data/tierData';
import { TierId } from '../types';
import { Check, ShieldCheck, Award } from 'lucide-react';

interface TierBenefitsSectionProps {
  selectedTier: TierId;
  onSelectTier: (tier: TierId) => void;
}

export const TierBenefitsSection: React.FC<TierBenefitsSectionProps> = ({
  selectedTier,
  onSelectTier,
}) => {
  return (
    <section id="tier-perks" className="py-10 sm:py-16 bg-white border-t border-stone-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-1.5">
            <Award className="w-3.5 h-3.5 text-neutral-700" />
            <span>باشگاه مشتریان و وفاداری</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            سطوح عضویت و امتیازات ویژه هر رده
          </h2>
          <p className="mt-1.5 text-sm text-neutral-600">
            با ارتقای رده عضویت خود در باشگاه مشتریان، علاوه بر درصد تخفیف‌های بالاتر در جدول، از خدمات VIP اختصاصی نیز بهره‌مند شوید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISCOUNT_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-neutral-900 bg-stone-50/70 shadow-sm ring-1 ring-neutral-900/10'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div>
                  {/* Top Tier Title & Badge */}
                  <div className="flex items-center justify-between mb-4">
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
                        {tier.name}
                      </h3>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-bold text-neutral-900 bg-neutral-200/80 px-2 py-0.5 rounded-md">
                        رده فعال
                      </span>
                    )}
                  </div>

                  {/* Discount Quick Recap Box */}
                  <div className="p-3 bg-white rounded-xl border border-stone-200/80 mb-5 space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-neutral-600">
                      <span>۱ تا ۳ تیکه:</span>
                      <span className="font-bold text-neutral-900 font-mono">
                        {toPersianDigits(tier.upTo3PiecesPercent)}٪ تخفیف
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-neutral-900 font-semibold pt-1 border-t border-stone-100">
                      <span>۴ تیکه به بالا:</span>
                      <span className="font-extrabold text-emerald-800 font-mono">
                        {toPersianDigits(tier.fourAndAbovePercent)}٪ تخفیف
                      </span>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-neutral-400 block mb-1 uppercase tracking-wider">
                      شرط احراز رده:
                    </span>
                    <span className="text-xs text-neutral-700 font-medium">
                      {tier.minAnnualSpendToman === 0
                        ? 'عضویت خودکار با اولین خرید'
                        : `حداقل ${formatToman(tier.minAnnualSpendToman)} خرید سالانه`}
                    </span>
                  </div>

                  {/* Perks list */}
                  <div>
                    <span className="text-[11px] font-bold text-neutral-400 block mb-2 uppercase tracking-wider">
                      مزایای اختصاصی:
                    </span>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      {tier.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-neutral-800 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200">
                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-neutral-900 text-white'
                        : 'bg-stone-100 hover:bg-stone-200 text-neutral-800'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{isSelected ? 'سطح انتخابی شما' : `انتخاب ${tier.shortName}`}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
