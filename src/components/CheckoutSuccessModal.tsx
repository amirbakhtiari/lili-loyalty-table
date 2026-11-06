import React from 'react';
import { CartItem, TierId } from '../types';
import { DISCOUNT_TIERS, formatToman, toPersianDigits, getDiscountPercent } from '../data/tierData';
import { CheckCircle, X, Printer, ShoppingBag, ArrowRight } from 'lucide-react';

interface CheckoutSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  selectedTier: TierId;
}

export const CheckoutSuccessModal: React.FC<CheckoutSuccessModalProps> = ({
  isOpen,
  onClose,
  cart,
  selectedTier,
}) => {
  if (!isOpen) return null;

  const totalPieces = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.product.priceToman * item.quantity, 0);
  const currentTier = DISCOUNT_TIERS.find((t) => t.id === selectedTier) || DISCOUNT_TIERS[0];
  const discountPercent = getDiscountPercent(selectedTier, totalPieces);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalPayable = subtotal - discountAmount;
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/50">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-neutral-900">
              پیش‌فاکتور رسمی و اعمال تخفیف پلکانی
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

        {/* Invoice Body */}
        <div className="p-6 space-y-4">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2">
            <div className="flex justify-between text-neutral-600">
              <span>شماره سفارش آزمایشی:</span>
              <span className="font-mono font-bold text-neutral-900">
                #{toPersianDigits(orderNumber)}
              </span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>رده اعمال شده:</span>
              <span className="font-bold text-neutral-900">{currentTier.name}</span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>تعداد کل تیکه‌ها:</span>
              <span className="font-bold text-neutral-900 font-mono">
                {toPersianDigits(totalPieces)} تیکه ({totalPieces >= 4 ? 'سقف تخفیف ۴ تیکه به بالا' : 'تعرفه ۱ تا ۳ تیکه'})
              </span>
            </div>
          </div>

          {/* Itemized summary */}
          <div className="divide-y divide-stone-100 max-h-44 overflow-y-auto pr-1 text-xs">
            {cart.map((item) => (
              <div key={item.product.id} className="py-2 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-neutral-900 block">{item.product.name}</span>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    {formatToman(item.product.priceToman)} × {toPersianDigits(item.quantity)}
                  </span>
                </div>
                <span className="font-mono font-bold text-neutral-800">
                  {formatToman(item.product.priceToman * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Totals */}
          <div className="pt-3 border-t border-stone-200 space-y-2 text-xs">
            <div className="flex justify-between text-neutral-600">
              <span>جمع فاکتور:</span>
              <span className="font-mono">{formatToman(subtotal)}</span>
            </div>
            <div className="flex justify-between text-emerald-700 font-medium">
              <span>درصد تخفیف ({toPersianDigits(discountPercent)}٪):</span>
              <span className="font-mono font-bold">{formatToman(discountAmount)} -</span>
            </div>
            <div className="pt-2 border-t border-stone-200 flex justify-between text-sm font-black text-neutral-900">
              <span>مبلغ پرداختی نهایی:</span>
              <span className="font-mono text-base">{formatToman(finalPayable)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
          <button
            onClick={() => window.print()}
            className="px-3 py-2 text-xs font-medium text-neutral-700 hover:text-neutral-900 bg-white border border-stone-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>چاپ فاکتور</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>بستن و ادامه خرید</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
