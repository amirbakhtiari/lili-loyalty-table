import React, { useState, useEffect } from 'react';

interface BlackFridaySplashProps {
  onComplete: () => void;
}

interface Spark {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export const BlackFridaySplash: React.FC<BlackFridaySplashProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'idle' | 'charging' | 'bursting' | 'fading'>('idle');
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const sparkColors = ['#FACC15', '#EAB308', '#F59E0B', '#FFFFFF', '#FEF08A', '#F97316'];
    const newSparks: Spark[] = [];

    for (let i = 0; i < 48; i++) {
      const angle = (i / 48) * 2 * Math.PI + (Math.random() - 0.5) * 0.25;
      const distance = 140 + Math.random() * 260;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      const size = 5 + Math.random() * 8;
      const color = sparkColors[Math.floor(Math.random() * sparkColors.length)];

      newSparks.push({
        id: i,
        x,
        y,
        size,
        color,
        duration: 0.6 + Math.random() * 0.4,
        delay: Math.random() * 0.08,
      });
    }

    setSparks(newSparks);
  }, []);

  const triggerBurst = () => {
    if (stage !== 'idle') return;

    setStage('charging');

    setTimeout(() => {
      setStage('bursting');

      setTimeout(() => {
        setStage('fading');

        setTimeout(() => {
          onComplete();
        }, 500);
      }, 600);
    }, 350);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerBurst();
    }, 1800);

    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div
      onClick={triggerBurst}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-all duration-700 select-none cursor-pointer ${
        stage === 'fading'
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      } bg-[#08080a] text-white`}
      style={{ touchAction: 'manipulation' }}
    >
      {/* Background High-Voltage Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* Central Black Friday Emblem */}
      <div className="relative flex items-center justify-center">
        {/* Shockwave Rings on Burst */}
        {(stage === 'bursting' || stage === 'fading') && (
          <>
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-3xl border-2 border-yellow-400 animate-ping opacity-75 pointer-events-none" />
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-yellow-300 animate-ping opacity-40 delay-100 pointer-events-none" />
          </>
        )}

        {/* Bursting Golden Sparks */}
        {stage === 'bursting' && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {sparks.map((p) => (
              <span
                key={p.id}
                className="absolute rounded-full shadow-lg transition-transform"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: p.color,
                  boxShadow: `0 0 16px ${p.color}`,
                  transform: `translate(${p.x}px, ${p.y}px) scale(0)`,
                  transition: `transform ${p.duration}s cubic-bezier(0.12, 0.8, 0.32, 1) ${p.delay}s, opacity ${p.duration}s ease`,
                  opacity: 0,
                }}
              />
            ))}
          </div>
        )}

        {/* Badge Card Wrapper */}
        <div
          className={`relative transition-all duration-400 ${
            stage === 'idle'
              ? 'scale-100'
              : stage === 'charging'
              ? 'scale-105'
              : 'scale-125 opacity-0'
          }`}
        >
          {/* Ambient Glow behind badge */}
          <div
            className={`absolute -inset-1.5 rounded-3xl transition-opacity duration-400 ${
              stage === 'charging'
                ? 'bg-yellow-400 blur-2xl opacity-80'
                : 'bg-yellow-500/25 blur-xl opacity-60'
            }`}
          />

          {/* Main Pristine Luxury Badge */}
          <div className="relative w-[280px] sm:w-[330px] rounded-3xl bg-[#111116] border border-yellow-400/40 p-6 sm:p-7 shadow-2xl shadow-black flex flex-col items-center text-center">
            {/* Store Name Lockup */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="text-xs font-bold text-neutral-300 tracking-normal">
                فروشگاه پوشاک لی لی کیدز
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            </div>

            {/* Clean LTR English Typography */}
            <div dir="ltr" className="my-2 select-none tracking-tight">
              <div className="text-4xl sm:text-5xl font-black text-white leading-none">
                BLACK
              </div>
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 leading-none mt-1">
                FRIDAY
              </div>
            </div>

            {/* Year & Event Title */}
            <span className="text-[11px] font-semibold text-neutral-400 tracking-widest uppercase mt-2">
              حراج جمعه سیاه · سال ۱۴۰۵
            </span>

            {/* Discount Pill */}
            <div className="mt-4 px-4 py-1.5 rounded-full bg-yellow-400 text-black font-black text-xs sm:text-sm tracking-wide shadow-md">
              تا ۶۵٪ تخفیف باشگاه مشتریان
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
