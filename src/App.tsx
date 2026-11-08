import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BlackFridayHeroBanner } from './components/BlackFridayHeroBanner';
import { ExactDiscountTable } from './components/ExactDiscountTable';
import { Footer } from './components/Footer';
import { BlackFridaySplash } from './components/BlackFridaySplash';

export default function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  // Only shown once at the start of app launch
  const [showSplash, setShowSplash] = useState<boolean>(true);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isLight = themeMode === 'light';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 relative pb-14 sm:pb-0 ${
        isLight
          ? 'bg-[#FAF8F5] text-stone-900 selection:bg-neutral-900 selection:text-yellow-400'
          : 'bg-[#08080a] text-neutral-100 selection:bg-yellow-400 selection:text-black'
      }`}
    >
      {/* Initial App Launch Splash: Black Friday Electric Vault */}
      {showSplash && (
        <BlackFridaySplash onComplete={() => setShowSplash(false)} />
      )}

      {/* Black Friday High-Energy Ambient Glow */}
      <div
        className={`pointer-events-none absolute top-0 inset-x-0 h-[460px] opacity-25 blur-3xl transition-opacity duration-500 ${
          isLight
            ? 'bg-gradient-to-b from-yellow-200/40 via-amber-100/10 to-transparent'
            : 'bg-gradient-to-b from-yellow-500/15 via-amber-600/5 to-transparent'
        }`}
      />

      {/* Header */}
      <Navbar
        themeMode={themeMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="flex-1 relative z-10 space-y-2 sm:space-y-4">
        {/* Black Friday High-Energy Hero Banner */}
        <BlackFridayHeroBanner themeMode={themeMode} />

        {/* Exact Table with Mobile-First Adaptive Cards + Desktop Table */}
        <ExactDiscountTable themeMode={themeMode} />
      </main>

      {/* Footer */}
      <Footer themeMode={themeMode} />

      {/* Mobile Sticky Quick Banner */}
      <aside 
        aria-label="نوار حراج بلک فرایدی موبایل"
        className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-black text-white px-4 py-2.5 shadow-xl border-t border-yellow-400/30 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="text-base text-yellow-400">⚡</span>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-tight leading-tight">
              فروشگاه پوشاک لی لی کیدز
            </span>
            <span className="text-[10px] text-yellow-400/90 font-medium">
              حراج بلک فرایدی ۱۴۰۵ · Black Friday
            </span>
          </div>
        </div>

        <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg text-[11px] font-black shadow-xs">
          <span>تا ۶۵٪ تخفیف</span>
        </div>
      </aside>
    </div>
  );
}
