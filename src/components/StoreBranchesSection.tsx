import React, { useState } from 'react';
import { MapPin, Copy, Check, Navigation, ExternalLink } from 'lucide-react';
import { toPersianDigits } from '../data/tierData';

interface StoreBranchesSectionProps {
  themeMode: 'light' | 'dark';
}

interface Branch {
  id: string;
  name: string;
  city: string;
  address: string;
  tag: string;
  lat: number;
  lng: number;
  mapsUrl: string;
}

const BRANCHES: Branch[] = [
  {
    id: 'jahanshar',
    name: 'شعبه جهانشهر',
    city: 'کرج',
    address: 'کرج - جهانشهر - بلوار جمهوری - قبل از زیرگذر - نبش کوچه اربابی (آناهیتا)',
    tag: 'بلوار جمهوری',
    lat: 35.827335,
    lng: 50.978923,
    mapsUrl: 'https://maps.google.com/?q=35.827335,50.978923',
  },
  {
    id: 'azimieh',
    name: 'شعبه عظیمیه',
    city: 'کرج',
    address: `کرج - عظیمیه - برج ماندگار - پلاک ${toPersianDigits(97)}`,
    tag: 'برج ماندگار',
    lat: 35.835838,
    lng: 51.0104471,
    mapsUrl: 'https://maps.google.com/?q=35.835838,51.0104471',
  },
  {
    id: 'vanush',
    name: 'شعبه ونوش',
    city: 'مازندران',
    address: 'مازندران - ونوش',
    tag: 'شعبه شمال',
    lat: 36.5715843,
    lng: 51.8616065,
    mapsUrl: 'https://maps.google.com/?q=36.5715843,51.8616065',
  },
];

export const StoreBranchesSection: React.FC<StoreBranchesSectionProps> = ({ themeMode }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const isLight = themeMode === 'light';

  const handleCopy = (branch: Branch) => {
    navigator.clipboard.writeText(branch.address);
    setCopiedId(branch.id);
    setTimeout(() => {
      setCopiedId((curr) => (curr === branch.id ? null : curr));
    }, 2000);
  };

  return (
    <section
      aria-label="آدرس شعب فروشگاه پوشاک لی لی کیدز"
      className="w-full max-w-5xl mx-auto py-5 sm:py-8 px-3 sm:px-6"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-black text-yellow-500 dark:text-yellow-400 mb-0.5">
            <MapPin className="w-3.5 h-3.5 fill-current text-yellow-400" />
            <span className="uppercase tracking-wider">شعب حضوری</span>
            <span className="text-neutral-500">·</span>
            <span>۳ شعبه فعال</span>
          </div>
          <h3
            className={`text-lg sm:text-2xl font-black ${
              isLight ? 'text-stone-900' : 'text-white'
            }`}
          >
            آدرس شعب فروشگاه پوشاک لی لی کیدز
          </h3>
        </div>

        <span className="text-xs text-neutral-400 hidden sm:inline-block">
          برای مسیریابی روی آیکون فلش یا دکمه نقشه کلیک کنید
        </span>
      </div>

      {/* 3 Branches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {BRANCHES.map((branch) => {
          const isCopied = copiedId === branch.id;

          return (
            <div
              key={branch.id}
              className={`rounded-2xl p-4 sm:p-5 border transition-all flex flex-col justify-between ${
                isLight
                  ? 'bg-white border-stone-200/90 shadow-sm hover:border-amber-400/50'
                  : 'bg-[#111116] border-neutral-800 hover:border-yellow-400/40 shadow-md'
              }`}
            >
              <div>
                {/* Header of the Card */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    {/* The Clickable Navigation Arrow (فلش) leading directly to Google Maps */}
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all cursor-pointer group border ${
                        isLight
                          ? 'bg-amber-100 hover:bg-yellow-400 hover:text-black text-amber-900 border-amber-200/80 shadow-2xs'
                          : 'bg-yellow-400/10 hover:bg-yellow-400 hover:text-black text-yellow-400 border-yellow-400/30 shadow-xs'
                      }`}
                      title={`مسیریابی ${branch.name} در Google Maps`}
                      aria-label={`مسیریابی ${branch.name} در Google Maps`}
                    >
                      <Navigation className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
                    </a>

                    <div>
                      <h4
                        className={`text-sm sm:text-base font-black ${
                          isLight ? 'text-stone-900' : 'text-white'
                        }`}
                      >
                        {branch.name}
                      </h4>
                      <span className="text-[11px] text-neutral-400 block font-medium">
                        {branch.city}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isLight
                        ? 'bg-stone-100 text-stone-600'
                        : 'bg-neutral-800 text-neutral-300'
                    }`}
                  >
                    {branch.tag}
                  </span>
                </div>

                {/* Address Paragraph */}
                <p
                  className={`text-xs sm:text-[13px] leading-relaxed mb-4 ${
                    isLight ? 'text-stone-700' : 'text-neutral-300'
                  }`}
                >
                  {branch.address}
                </p>
              </div>

              {/* Action Buttons Row: Google Maps Navigation + Copy Address */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-200/60 dark:border-neutral-800/80">
                {/* 1. Google Maps Navigation Button */}
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                    isLight
                      ? 'bg-amber-50 hover:bg-amber-100 text-amber-950 border-amber-200 shadow-2xs'
                      : 'bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 border-yellow-400/30'
                  }`}
                  title={`مسیریابی ${branch.name} در Google Maps`}
                  aria-label={`مسیریابی ${branch.name} در Google Maps`}
                >
                  <Navigation className="w-3.5 h-3.5 fill-current" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                {/* 2. Copy Address Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(branch)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                    isCopied
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                      : isLight
                      ? 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border-neutral-800 hover:border-neutral-700'
                  }`}
                  title="کپی نشانی شعبه"
                  aria-label={`کپی نشانی ${branch.name}`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>کپی شد</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>کپی نشانی</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
