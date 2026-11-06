import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

interface NavbarProps {
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  themeMode,
  onToggleTheme,
}) => {
  const isLight = themeMode === 'light';

  return (
    <header
      className={`sticky top-0 z-40 transition-all border-b ${
        isLight
          ? 'bg-stone-50/90 backdrop-blur-md border-stone-200/80 text-stone-900 shadow-2xs'
          : 'bg-neutral-950/90 backdrop-blur-md border-neutral-800 text-neutral-100 shadow-md'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand / Title Lockup: Lili Kids */}
        <div className="flex items-center gap-3.5">
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm tracking-widest shadow-2xs transition-colors ${
              isLight
                ? 'bg-stone-900 text-amber-100'
                : 'bg-amber-100 text-stone-950'
            }`}
          >
            LK
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-black tracking-tight font-sans">
                لیلی کیدز
              </span>
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 font-mono tracking-wider">
                LILI KIDS
              </span>
            </div>
            <span
              className={`text-xs font-normal mt-0.5 ${
                isLight ? 'text-stone-500' : 'text-neutral-400'
              }`}
            >
              باشگاه مشتریان اختصاصی
            </span>
          </div>
        </div>

        {/* Action Controls: Theme Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer border ${
              isLight
                ? 'bg-white hover:bg-stone-100 text-stone-800 border-stone-200 shadow-2xs'
                : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border-neutral-700 shadow-2xs'
            }`}
            title="تغییر تم"
          >
            {isLight ? (
              <>
                <Moon className="w-3.5 h-3.5 text-stone-600" />
                <span className="hidden sm:inline">تم تیره</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">پالت روشن</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
