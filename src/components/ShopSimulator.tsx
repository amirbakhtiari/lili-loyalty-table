import React from 'react';
import { CATALOG_PRODUCTS, formatToman, toPersianDigits, getDiscountPercent, DISCOUNT_TIERS } from '../data/tierData';
import { TierId, CartItem, CatalogProduct } from '../types';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft, Check, Sparkles, AlertCircle } from 'lucide-react';

interface ShopSimulatorProps {
  cart: CartItem[];
  selectedTier: TierId;
  onSelectTier: (tier: TierId) => void;
  onAddToCart: (product: CatalogProduct) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onCheckoutSuccess: () => void;
}

export const ShopSimulator: React.FC<ShopSimulatorProps> = ({
  cart,
  selectedTier,
  onSelectTier,
  onAddToCart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckoutSuccess,
}) => {
  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const rawSubtotalToman = cart.reduce((acc, item) => acc + item.product.priceToman * item.quantity, 0);
  
  const currentTier = DISCOUNT_TIERS.find((t) => t.id === selectedTier) || DISCOUNT_TIERS[0];
  const appliedDiscountPercent = getDiscountPercent(selectedTier, totalItemCount);
  const discountAmountToman = Math.round((rawSubtotalToman * appliedDiscountPercent) / 100);
  const finalPayableToman = rawSubtotalToman - discountAmountToman;

  const itemsNeededForBonus = totalItemCount < 4 ? 4 - totalItemCount : 0;

  return (
    <section id="shop-simulator" className="py-8 sm:py-14 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-1.5">
              <span>شبیه‌ساز خرید زنده</span>
              <span>·</span>
              <span>تست واقعی قوانین</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              آتلیه و کالکشن پوشاک مینیمال
            </h2>
            <p className="mt-1 text-sm text-neutral-600 max-w-2xl">
              محصولات زیر را به سبد اضافه کنید تا اعمال اتوماتیک درصد تخفیف‌های جدول (۳۰٪ تا ۶۵٪) را به شکل زنده تجربه کنید.
            </p>
          </div>

          {/* Quick Active Tier Dropdown / Switcher */}
          <div className="flex items-center gap-2 bg-stone-100 p-1.5 rounded-xl border border-stone-200 self-start md:self-auto">
            <span className="text-xs text-neutral-500 px-2 font-medium">سطح شما:</span>
            {DISCOUNT_TIERS.map((t) => (
              <button
                key={t.id}
                onClick={() => onSelectTier(t.id)}
                className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                  selectedTier === t.id
                    ? 'bg-neutral-900 text-white font-bold shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {t.shortName}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Product Catalog Grid (8 columns on desktop) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {CATALOG_PRODUCTS.map((product) => {
                const inCart = cart.find((item) => item.product.id === product.id);
                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-neutral-300 transition-all flex flex-col group shadow-2xs"
                  >
                    {/* Image Slot */}
                    <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {product.tag && (
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-medium text-neutral-800 shadow-2xs border border-stone-200/50">
                          {product.tag}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] text-neutral-400 block mb-1">
                          {product.category}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                          {product.name}
                        </h3>
                        <div className="mt-2.5 text-sm sm:text-base font-extrabold text-neutral-800 font-mono">
                          {formatToman(product.priceToman)}
                        </div>
                      </div>

                      {/* Add or Adjust Quantity */}
                      <div className="mt-4 pt-3 border-t border-stone-100">
                        {inCart ? (
                          <div className="flex items-center justify-between bg-stone-50 p-1.5 rounded-xl border border-stone-200">
                            <button
                              onClick={() => onUpdateQuantity(product.id, inCart.quantity - 1)}
                              className="w-8 h-8 rounded-lg bg-white border border-stone-200 text-neutral-700 flex items-center justify-center hover:bg-stone-100 cursor-pointer"
                              aria-label="کاهش"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold font-mono text-neutral-900">
                              {toPersianDigits(inCart.quantity)} عدد در سبد
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(product.id, inCart.quantity + 1)}
                              className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 cursor-pointer"
                              aria-label="افزایش"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => onAddToCart(product)}
                            className="w-full py-2.5 px-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>افزودن به سبد</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart & Real-time Rule Engine (4-5 columns on desktop) */}
          <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
            <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-xs space-y-5">
              {/* Cart Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-neutral-700" />
                  <h3 className="text-base font-bold text-neutral-900">
                    سبد خرید و محاسبه فاکتور
                  </h3>
                </div>
                {cart.length > 0 && (
                  <button
                    onClick={onClearCart}
                    className="text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>خالی کردن</span>
                  </button>
                )}
              </div>

              {/* Dynamic Incentive Banner */}
              <div className="p-3.5 rounded-xl border bg-stone-50 border-stone-200 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-neutral-800">
                    تعداد تیکه‌های سبد: {toPersianDigits(totalItemCount)} تیکه
                  </span>
                  <span className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                    totalItemCount >= 4 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-amber-100 text-amber-900'
                  }`}>
                    تخفیف: {toPersianDigits(appliedDiscountPercent)}٪
                  </span>
                </div>

                {/* Progress bar towards 4 pieces */}
                <div className="w-full bg-stone-200 rounded-full h-2 mb-2 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      totalItemCount >= 4 ? 'bg-emerald-600' : 'bg-amber-500'
                    }`}
                    style={{ width: `${Math.min(100, (totalItemCount / 4) * 100)}%` }}
                  />
                </div>

                {totalItemCount === 0 ? (
                  <p className="text-neutral-500 text-[11px]">
                    هنوز کالایی به سبد اضافه نشده است. یک یا چند آیتم را انتخاب کنید.
                  </p>
                ) : itemsNeededForBonus > 0 ? (
                  <p className="text-amber-800 text-[11px] leading-relaxed flex items-center gap-1">
                    <Sparkles className="w-3 h-3 shrink-0 text-amber-600" />
                    <span>
                      تنها با افزودن <strong>{toPersianDigits(itemsNeededForBonus)} تیکه دیگر</strong>، تخفیف فاکتور شما به <strong>{toPersianDigits(currentTier.fourAndAbovePercent)}٪</strong> می‌رسد!
                    </span>
                  </p>
                ) : (
                  <p className="text-emerald-800 text-[11px] font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>حداکثر تخفیف رده {currentTier.name} ({toPersianDigits(appliedDiscountPercent)}٪) اعمال شد.</span>
                  </p>
                )}
              </div>

              {/* Cart Items List */}
              {cart.length > 0 ? (
                <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between text-xs py-2 border-b border-stone-100 last:border-0"
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-10 h-10 object-cover rounded-lg border border-stone-200"
                        />
                        <div>
                          <span className="font-semibold text-neutral-900 block">
                            {item.product.name}
                          </span>
                          <span className="text-[11px] text-neutral-500 font-mono">
                            {formatToman(item.product.priceToman)} × {toPersianDigits(item.quantity)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1 text-neutral-400 hover:text-rose-600 transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-xs text-neutral-400">
                  سبد خرید شما در حال حاضر خالی است
                </div>
              )}

              {/* Financial Calculation Breakdown */}
              <div className="pt-4 border-t border-stone-200 space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-neutral-600">
                  <span>جمع اقلام سبد:</span>
                  <span className="font-mono text-neutral-800">
                    {formatToman(rawSubtotalToman)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <div className="flex items-center gap-1">
                    <span>درصد تخفیف رده {currentTier.shortName}:</span>
                  </div>
                  <span className="font-mono font-bold text-neutral-800">
                    {toPersianDigits(appliedDiscountPercent)}٪
                  </span>
                </div>

                <div className="flex items-center justify-between text-emerald-700 font-medium">
                  <span>مبلغ تخفیف کسر شده:</span>
                  <span className="font-mono font-bold">
                    {formatToman(discountAmountToman)} -
                  </span>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                  <span className="font-bold text-neutral-900 text-sm">مبلغ نهایی پرداختی:</span>
                  <span className="text-base sm:text-lg font-black text-neutral-900 font-mono">
                    {formatToman(finalPayableToman)}
                  </span>
                </div>
              </div>

              {/* Checkout / Simulated Order */}
              <button
                disabled={cart.length === 0}
                onClick={onCheckoutSuccess}
                className="w-full py-3 px-4 bg-neutral-900 hover:bg-neutral-800 disabled:opacity-40 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>ثبت فاکتور و تایید تخفیف</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 text-center">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>تمام مبالغ و درصدهای تخفیف با تضمین فرمول رسمی جدول محاسبه شده‌اند</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
