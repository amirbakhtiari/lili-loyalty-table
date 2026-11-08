import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
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
  const isLight = themeMode === 'light';

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
          برای مسیریابی روی دکمه مسیریابی یا آیکون فلش کلیک کنید
        </span>
      </div>

      {/* 3 Branches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {BRANCHES.map((branch) => {
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

              {/* Action Button: مسیریابی */}
              <div className="pt-2 border-t border-neutral-200/60 dark:border-neutral-800/80">
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                    isLight
                      ? 'bg-amber-50 hover:bg-amber-100 text-amber-950 border-amber-200 shadow-2xs'
                      : 'bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 border-yellow-400/30'
                  }`}
                  title={`مسیریابی ${branch.name} در Google Maps`}
                  aria-label={`مسیریابی ${branch.name}`}
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>مسیریابی</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
