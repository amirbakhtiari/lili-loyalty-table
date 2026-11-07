import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface YaldaSplashProps {
  onComplete: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  isSeed: boolean;
}

export const YaldaSplash: React.FC<YaldaSplashProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'idle' | 'cracking' | 'bursting' | 'fading'>('idle');
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate explosion particles (Pomegranate seeds and golden sparks)
  useEffect(() => {
    const seedColors = ['#E11D48', '#BE123C', '#9F1239', '#881337', '#FB7185', '#F59E0B', '#FBBF24'];
    const newParticles: Particle[] = [];

    // 42 burst particles
    for (let i = 0; i < 42; i++) {
      const angle = (i / 42) * 2 * Math.PI + (Math.random() - 0.5) * 0.3;
      const distance = 120 + Math.random() * 260; // Distance traveled outward
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      const size = 6 + Math.random() * 12;
      const color = seedColors[Math.floor(Math.random() * seedColors.length)];

      newParticles.push({
        id: i,
        x,
        y,
        size,
        color,
        delay: Math.random() * 0.08,
        duration: 0.65 + Math.random() * 0.45,
        isSeed: i % 2 === 0,
      });
    }

    setParticles(newParticles);
  }, []);

  const triggerBurst = () => {
    if (stage !== 'idle') return;

    // Phase 1: Cracking & vibrating with golden light
    setStage('cracking');

    setTimeout(() => {
      // Phase 2: Burst & explosion
      setStage('bursting');

      setTimeout(() => {
        // Phase 3: Smooth fade-out into main app
        setStage('fading');

        setTimeout(() => {
          onComplete();
        }, 600);
      }, 650);
    }, 450);
  };

  // Auto-burst timer after 2.0s on initial app load
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerBurst();
    }, 2000);

    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div
      onClick={triggerBurst}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-all duration-700 select-none cursor-pointer ${
        stage === 'fading'
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      } bg-gradient-to-b from-[#1A050A] via-[#2B0A12] to-[#120306] text-white`}
      style={{ touchAction: 'manipulation' }}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-rose-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-rose-500/15 rounded-full blur-2xl" />
      </div>

      {/* Top Branding */}
      <div className="relative z-10 text-center mb-6 sm:mb-10 transition-opacity duration-300">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/70 border border-rose-800/80 text-rose-300 text-xs font-bold mb-2 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>جشنواره شب یلدا ۱۴۰۵</span>
        </div>
        <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white font-sans">
          فروشگاه پوشاک لی لی کیدز
        </h1>
        <p className="text-xs text-rose-200/70 mt-1">
          طولانی‌ترین شب سال، به یادماندنی‌ترین خاطره‌ها
        </p>
      </div>

      {/* The Central Pomegranate (Burst on tap or auto-timer) */}
      <div className="relative flex items-center justify-center my-4">
        {/* Ripple Shockwave Ring during burst */}
        {(stage === 'bursting' || stage === 'fading') && (
          <div className="absolute w-28 h-28 rounded-full border-2 border-rose-400 animate-ping opacity-75" />
        )}

        {/* Bursting Seeds Particles */}
        {stage === 'bursting' && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {particles.map((p) => (
              <span
                key={p.id}
                className="absolute rounded-full shadow-lg transition-transform"
                style={{
                  width: `${p.size}px`,
                  height: p.isSeed ? `${p.size * 1.3}px` : `${p.size}px`,
                  backgroundColor: p.color,
                  boxShadow: `0 0 12px ${p.color}`,
                  borderRadius: p.isSeed ? '45% 55% 65% 35% / 55% 45% 55% 45%' : '9999px',
                  transform: `translate(${p.x}px, ${p.y}px) rotate(${p.x * 2}deg) scale(0)`,
                  transition: `transform ${p.duration}s cubic-bezier(0.12, 0.8, 0.32, 1) ${p.delay}s, opacity ${p.duration}s ease`,
                  opacity: 0,
                }}
              />
            ))}
          </div>
        )}

        {/* Pomegranate SVG Illustration */}
        <div
          className={`relative transition-all duration-300 ${
            stage === 'idle'
              ? 'animate-bounce'
              : stage === 'cracking'
              ? 'scale-115 rotate-3'
              : 'scale-140 opacity-0'
          }`}
          style={{
            animationDuration: stage === 'idle' ? '2.4s' : undefined,
          }}
        >
          {/* Golden Core Glow */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-300 ${
              stage === 'cracking'
                ? 'bg-amber-400 blur-xl opacity-90 scale-125'
                : 'bg-rose-600/30 blur-lg opacity-40'
            }`}
          />

          {/* Detailed Illustrated Pomegranate */}
          <svg
            className="w-36 h-36 sm:w-48 sm:h-48 drop-shadow-[0_15px_30px_rgba(225,29,72,0.45)]"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Pomegranate Crown (تاج انار) */}
            <path
              d="M51 22L47 11L55 16L60 9L65 16L73 11L69 22"
              fill="#9F1239"
              stroke="#E11D48"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M54 18L57 14L60 17L63 14L66 18"
              fill="#E11D48"
            />

            {/* Main Pomegranate Body */}
            <ellipse
              cx="60"
              cy="68"
              rx="42"
              ry="42"
              fill="url(#pomegranateGrad)"
              stroke="#BE123C"
              strokeWidth="3"
            />

            {/* Highlight Sheen / Gloss */}
            <path
              d="M36 46C44 38 60 36 74 41"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.35"
            />
            <circle cx="34" cy="58" r="3.5" fill="white" opacity="0.4" />

            {/* Glowing Crack Line (Visible during cracking stage) */}
            {stage === 'cracking' && (
              <path
                d="M60 26L58 48L64 64L56 82L60 106"
                stroke="#FDE047"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
                style={{ filter: 'drop-shadow(0 0 8px #FACC15)' }}
              />
            )}

            {/* Interior Seed Details */}
            <circle cx="50" cy="62" r="5" fill="#881337" opacity="0.6" />
            <circle cx="68" cy="64" r="5.5" fill="#881337" opacity="0.6" />
            <circle cx="58" cy="78" r="6" fill="#881337" opacity="0.6" />
            <circle cx="48" cy="80" r="4.5" fill="#881337" opacity="0.5" />
            <circle cx="72" cy="78" r="5" fill="#881337" opacity="0.5" />

            {/* Gradients */}
            <defs>
              <radialGradient
                id="pomegranateGrad"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(48 52) rotate(54) scale(55)"
              >
                <stop offset="0%" stopColor="#FB7185" />
                <stop offset="35%" stopColor="#E11D48" />
                <stop offset="70%" stopColor="#9F1239" />
                <stop offset="100%" stopColor="#4C0519" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
