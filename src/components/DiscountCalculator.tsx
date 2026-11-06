import React, { useState } from 'react';
import { DISCOUNT_TIERS, toPersianDigits, formatToman, getDiscountPercent } from '../data/tierData';
import { TierId } from '../types';
import { Sliders, Plus, Minus, ArrowLeft, Zap, Sparkles, TrendingUp } from 'lucide-react';

interface DiscountCalculatorProps {
  selectedTier: TierId;
  onSelectTier: (tier: TierId) => void;
  onApplyScenarioToCart?: (pieceCount: number) => void;
}

export const DiscountCalculator: React.FC<DiscountCalculatorProps> = ({
  selectedTier,
  onSelectTier,
  onApplyScenarioToCart,
}) => {
  const [pieceCount, setPieceCount] = useState<number>(3);
  const [sampleTotalToman, setSampleTotalToman] = useState<number>(5000000);

  const currentTier = DISCOUNT_TIERS.find((t) => t.id === selectedTier) || DISCOUNT_TIERS[0];
  const discountPercent = getDiscountPercent(selectedTier, pieceCount);
  const discountAmount = Math.round((sampleTotalToman * discountPercent) / 100);
  const finalPrice = sampleTotalToman - discountAmount;

  const isBelowThreshold = pieceCount < 4;
  const piecesNeededForNextBracket = isBelowThreshold ? 4 - pieceCount : 0;
  const nextBracketPercent = currentTier.fourAndAbovePercent;

  return (
    <section id="calculator" className="py-8 sm:py-12 bg-stone-100/60 border-y border-stone-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-1.5">
            <Sliders className="w-3.5 h-3.5 text-neutral-700" />
            <span>ابزار تعاملی هوشمند</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            محاسبه‌گر آنی تخفیف پلکانی
          </h2>
          <p className="mt-1.5 text-sm text-neutral-600">
            سطح خود را مشخص کرده و با جابه‌جا کردن اسلایدر تعداد تیکه، سود نهایی خرید خود را مشاهده کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Controls Column (Left in LTR, Right in RTL) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            {/* Step 1: Tier Selector */}
            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                ۱. رده عضویت باشگاه مشتریان
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {DISCOUNT_TIERS.map((tier) => {
                  const active = selectedTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => onSelectTier(tier.id)}
                      className={`py-2.5 px-3 rounded-xl border text-right transition-all cursor-pointer flex flex-col justify-between ${
                        active
                          ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                          : 'bg-stone-50 text-neutral-800 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="text-xs font-bold">{tier.shortName}</span>
                        <span
                          className={`w-2 h-2 rounded-full ${
                            tier.id === 'white'
                              ? 'bg-stone-300'
                              : tier.id === 'green'
                              ? 'bg-emerald-400'
                              : tier.id === 'silver'
                              ? 'bg-slate-300'
                              : 'bg-amber-400'
                          }`}
                        />
                      </div>
                      <span className={`text-[11px] ${active ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        تا ۶۵٪ تخفیف
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Piece Count Stepper & Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  ۲. تعداد تیکه خرید شما
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500">وضعیت فعلی:</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    pieceCount >= 4 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-stone-200 text-neutral-700'
                  }`}>
                    {pieceCount >= 4 ? '۴ تیکه به بالا (تخفیف حداکثری)' : 'تا ۳ تیکه خرید'}
                  </span>
                </div>
              </div>

              {/* Counter Buttons & Input */}
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={() => setPieceCount((prev) => Math.max(1, prev - 1))}
                  disabled={pieceCount <= 1}
                  className="w-11 h-11 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 disabled:opacity-40 flex items-center justify-center text-neutral-800 font-bold transition-colors cursor-pointer"
                  aria-label="کاهش تعداد تیکه"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <div className="flex-1 bg-stone-50 border border-stone-200 rounded-xl py-2 px-4 text-center">
                  <span className="text-2xl font-black text-neutral-900 font-mono">
                    {toPersianDigits(pieceCount)}
                  </span>
                  <span className="text-xs text-neutral-500 mr-1.5">تیکه لباس / کالا</span>
                </div>

                <button
                  onClick={() => setPieceCount((prev) => Math.min(12, prev + 1))}
                  disabled={pieceCount >= 12}
                  className="w-11 h-11 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 disabled:opacity-40 flex items-center justify-center text-neutral-800 font-bold transition-colors cursor-pointer"
                  aria-label="افزایش تعداد تیکه"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Range Slider */}
              <input
                type="range"
                min="1"
                max="10"
                value={pieceCount}
                onChange={(e) => setPieceCount(Number(e.target.value))}
                className="w-full accent-neutral-900 h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1 font-mono">
                <span>۱ تیکه</span>
                <span className="font-bold text-neutral-700">مرز تخفیف طلایی: ۴ تیکه</span>
                <span>۱۰+ تیکه</span>
              </div>
            </div>

            {/* Smart Upsell Alert (If < 4 pieces) */}
            {isBelowThreshold ? (
              <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <strong>فرصت استثنایی: </strong>
                  با اضافه کردن تنها{' '}
                  <span className="font-black text-amber-950 underline decoration-amber-500">
                    {toPersianDigits(piecesNeededForNextBracket)} تیکه دیگر
                  </span>{' '}
                  به سبد خریدتان، درصد تخفیف شما از{' '}
                  <span className="font-bold">{toPersianDigits(discountPercent)}٪</span> به{' '}
                  <span className="font-extrabold text-emerald-800 text-sm">
                    {toPersianDigits(nextBracketPercent)}٪ (+۲۰٪ جهش)
                  </span>{' '}
                  افزایش می‌یابد!
                </div>
              </div>
            ) : (
              <div className="p-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-900 leading-relaxed">
                  <strong>تبریک! </strong>
                  شما در محدوده «۴ تیکه به بالا» قرار گرفته‌اید و بالاترین سقف تخفیف رده{' '}
                  <span className="font-bold">{currentTier.name}</span> یعنی{' '}
                  <span className="font-black text-emerald-950 text-sm">
                    {toPersianDigits(discountPercent)}٪
                  </span>{' '}
                  به طور کامل بر روی فاکتور شما اعمال خواهد شد.
                </div>
              </div>
            )}

            {/* Step 3: Optional Price Input Simulator */}
            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                ۳. شبیه‌سازی با مبلغ دلخواه سبد خرید (تومان)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[2000000, 5000000, 8000000, 12000000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSampleTotalToman(amount)}
                    className={`py-2 px-2 text-xs rounded-lg border font-mono transition-colors cursor-pointer ${
                      sampleTotalToman === amount
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-stone-50 text-neutral-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {toPersianDigits(amount / 1000000)} میلیون
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-300 shadow-sm relative overflow-hidden flex flex-col justify-between">
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <span className="text-xs font-bold text-neutral-500 uppercase">
                  نتیجه محاسبه آنی
                </span>
                <span className="text-xs font-semibold text-neutral-800 bg-stone-100 px-2.5 py-1 rounded-md">
                  {currentTier.name}
                </span>
              </div>

              {/* Big Discount Percent Highlight */}
              <div className="text-center py-4 bg-stone-50 rounded-2xl border border-stone-200 mb-6">
                <span className="text-xs text-neutral-500 block mb-1">
                  درصد تخفیف قطعی قابل اعمال
                </span>
                <div className="inline-flex items-baseline gap-1">
                  <span className="text-5xl sm:text-6xl font-black text-neutral-900 font-mono tracking-tighter">
                    {toPersianDigits(discountPercent)}
                  </span>
                  <span className="text-2xl font-bold text-neutral-500 font-mono">٪</span>
                </div>
                <span className="text-xs font-medium text-neutral-600 block mt-2">
                  {pieceCount < 4 ? 'تعرفه ۱ تا ۳ تیکه' : 'تعرفه ویژه ۴ تیکه به بالا'}
                </span>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-neutral-600">
                  <span>جمع فاکتور اولیه:</span>
                  <span className="font-mono text-neutral-800 font-medium">
                    {formatToman(sampleTotalToman)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-emerald-700 font-medium">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>مبلغ سود شما (تخفیف):</span>
                  </span>
                  <span className="font-mono font-bold">
                    {formatToman(discountAmount)} -
                  </span>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                  <span className="font-bold text-neutral-900">مبلغ نهایی پرداختی:</span>
                  <span className="text-lg sm:text-xl font-black text-neutral-900 font-mono">
                    {formatToman(finalPrice)}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            {onApplyScenarioToCart && (
              <div className="mt-8 pt-5 border-t border-stone-100">
                <button
                  onClick={() => onApplyScenarioToCart(pieceCount)}
                  className="w-full py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>تست این سناریو ({toPersianDigits(pieceCount)} تیکه) در سبد کالاها</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
