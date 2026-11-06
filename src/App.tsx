import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ExactDiscountTable } from './components/ExactDiscountTable';
import { Footer } from './components/Footer';

export default function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isLight = themeMode === 'light';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 relative ${
        isLight
          ? 'bg-[#FAF8F5] text-stone-900 selection:bg-stone-900 selection:text-white'
          : 'bg-[#0C0A09] text-neutral-100 selection:bg-white selection:text-neutral-950'
      }`}
    >
      {/* Subtle Warm Ambient Glow */}
      <div
        className={`pointer-events-none absolute top-0 inset-x-0 h-96 opacity-50 blur-3xl transition-opacity duration-500 ${
          isLight
            ? 'bg-gradient-to-b from-amber-100/40 via-stone-200/20 to-transparent'
            : 'bg-gradient-to-b from-neutral-800/20 to-transparent'
        }`}
      />

      {/* Header */}
      <Navbar
        themeMode={themeMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Table Content */}
      <main className="flex-1 flex items-center justify-center relative z-10">
        <ExactDiscountTable themeMode={themeMode} />
      </main>

      {/* Footer */}
      <Footer themeMode={themeMode} />
    </div>
  );
}
