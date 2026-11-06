import React from 'react';
import { X, CheckCircle2, Sparkles } from 'lucide-react';

interface OriginalImageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OriginalImageModal: React.FC<OriginalImageModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/50">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-neutral-900 text-white rounded-lg">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                تصویر مرجع جدول تخفیف‌های ارسالی شما
              </h3>
              <p className="text-xs text-neutral-500">
                تمام ۴ سطح مشتری و ستون‌های تخفیف دقیقا مطابق این تصویر بازطراحی شده است
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content with Image */}
        <div className="p-6 space-y-4">
          <div className="rounded-xl overflow-hidden border border-stone-800 bg-black flex items-center justify-center shadow-inner">
            <img
              src="/assets/aistudio/IMG-20261105-WA0007_b77b9e41.jpg"
              alt="جدول تخفیف‌های مرجع"
              className="w-full max-h-[320px] object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback if local path slightly differs in browser
                const target = e.currentTarget;
                if (!target.src.includes('public')) {
                  target.src = '/public/assets/aistudio/IMG-20261105-WA0007_b77b9e41.jpg';
                }
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>ستون تا ۳ تیکه خرید:</strong> ۳۰٪ سفید، ۳۵٪ سبز، ۴۰٪ نقره‌ای، ۴۵٪ طلایی
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>ستون ۴ تیکه به بالا:</strong> ۵۰٪ سفید، ۵۵٪ سبز، ۶۰٪ نقره‌ای، ۶۵٪ طلایی
              </span>
            </div>
            <div className="flex items-start gap-2 sm:col-span-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>تغییر اعمال شده به درخواست شما:</strong> جایگزینی زمینه تمام‌مشکی با پالت رنگی روشن، شیک، مدرن و کاملاً ریسپانسیو برای موبایل.
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer"
          >
            بستن پنجره
          </button>
        </div>
      </div>
    </div>
  );
};
