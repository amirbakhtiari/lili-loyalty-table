import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { YaldaHeroBanner } from './components/YaldaHeroBanner';
import { ExactDiscountTable } from './components/ExactDiscountTable';
import { Footer } from './components/Footer';
import { YaldaSplash } from './components/YaldaSplash';

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
          ? 'bg-[#FAF8F5] text-stone-900 selection:bg-rose-900 selection:text-white'
          : 'bg-[#0C0A09] text-neutral-100 selection:bg-rose-600 selection:text-white'
      }`}
    >
      {/* Initial App Launch Splash: Bursting Pomegranate */}
      {showSplash && (
        <YaldaSplash onComplete={() => setShowSplash(false)} />
      )}

      {/* Warm Yalda Ambient Glows */}
      <div
        className={`pointer-events-none absolute top-0 inset-x-0 h-[420px] opacity-35 blur-3xl transition-opacity duration-500 ${
          isLight
            ? 'bg-gradient-to-b from-rose-200/40 via-amber-100/20 to-transparent'
            : 'bg-gradient-to-b from-rose-950/30 via-neutral-900/15 to-transparent'
        }`}
      />

      {/* Header */}
      <Navbar
        themeMode={themeMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="flex-1 relative z-10 space-y-2 sm:space-y-4">
        {/* Yalda Night Festive Greeting Banner */}
        <YaldaHeroBanner themeMode={themeMode} />

        {/* Exact Table with Mobile-First Adaptive Cards + Desktop Table */}
        <ExactDiscountTable themeMode={themeMode} />
      </main>

      {/* Footer */}
      <Footer themeMode={themeMode} />

      {/* Mobile Sticky Quick Banner */}
      <aside 
        aria-label="نوار جشنواره شب یلدا موبایل"
        className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-rose-700 text-white px-4 py-2.5 shadow-lg flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="text-base">🍉</span>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-tight leading-tight">
              فروشگاه پوشاک لی لی کیدز
            </span>
            <span className="text-[10px] text-rose-100">
              تخفیف‌های ویژه شب یلدا ۱۴۰۵
            </span>
          </div>
        </div>

        <div className="bg-rose-800/90 px-3 py-1 rounded-lg text-[11px] font-bold border border-rose-600">
          <span>تا ۶۵٪ تخفیف</span>
        </div>
      </aside>
    </div>
  );
}
