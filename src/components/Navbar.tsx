import React from 'react';
import { Sun, Moon } from 'lucide-react';

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
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-stone-200/80 text-stone-900 shadow-2xs'
          : 'bg-[#0C0A09]/90 backdrop-blur-md border-neutral-800 text-neutral-100 shadow-md'
      }`}
    >
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Title Lockup: فروشگاه پوشاک لی لی کیدز */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center font-black text-xs sm:text-sm tracking-wider shadow-2xs transition-colors ${
              isLight
                ? 'bg-black text-yellow-400 border border-yellow-400/40'
                : 'bg-yellow-400 text-black shadow-xs shadow-yellow-400/20'
            }`}
          >
            LK
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-sm sm:text-lg font-black tracking-tight font-sans">
                فروشگاه پوشاک لی لی کیدز
              </span>
            </div>
            <span
              className={`text-[11px] sm:text-xs font-normal ${
                isLight ? 'text-stone-500' : 'text-neutral-400'
              }`}
            >
              باشگاه مشتریان
            </span>
          </div>
        </div>

        {/* Action Controls: Theme Switcher Only */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer border ${
              isLight
                ? 'bg-white hover:bg-stone-100 text-stone-800 border-stone-200 shadow-2xs'
                : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border-neutral-700 shadow-2xs'
            }`}
            title="تغییر تم"
            aria-label="تغییر تم"
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
