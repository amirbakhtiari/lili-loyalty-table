import { DiscountTier, CatalogProduct, TierId } from '../types';

export const toPersianDigits = (num: number | string): string => {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num
    .toString()
    .replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)]);
};

export const formatToman = (amount: number): string => {
  const formatted = new Intl.NumberFormat('fa-IR').format(amount);
  return `${formatted} تومان`;
};

// Exact data extracted from the user's provided matrix image
export const DISCOUNT_TIERS: DiscountTier[] = [
  {
    id: 'white',
    name: 'مشتریان سفید',
    shortName: 'سفید',
    upTo3PiecesPercent: 30,
    fourAndAbovePercent: 50,
    description: 'سطح آغازین ورود به باشگاه مشتریان با تخفیف‌های ویژه روزمره',
    minAnnualSpendToman: 0,
    benefits: [
      '۳۰٪ تخفیف تا ۳ تیکه خرید',
      '۵۰٪ تخفیف برای ۴ تیکه به بالا (+۲۰٪ تخفیف پلکانی)',
      'عضویت فوری پس از اولین خرید',
      'بسته‌بندی استاندارد مینیمال آتلیه'
    ],
    colorTheme: {
      bg: 'bg-stone-50/80',
      badgeBg: 'bg-neutral-100',
      badgeText: 'text-neutral-800',
      border: 'border-neutral-200',
      accent: 'text-neutral-700',
      glow: 'shadow-neutral-200/50'
    }
  },
  {
    id: 'green',
    name: 'مشتریان سبز',
    shortName: 'سبز',
    upTo3PiecesPercent: 35,
    fourAndAbovePercent: 55,
    description: 'اعضای پرانرژی و دوست‌دار محیط‌زیست با خریدهای مستمر فصلی',
    minAnnualSpendToman: 4000000,
    benefits: [
      '۳۵٪ تخفیف تا ۳ تیکه خرید',
      '۵۵٪ تخفیف برای ۴ تیکه به بالا',
      'ارسال رایگان سفارش‌های بالای ۳ تیکه',
      'دعوت به پیش‌نمایش مجموعه‌های کتان ارگانیک'
    ],
    colorTheme: {
      bg: 'bg-emerald-50/50',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
      border: 'border-emerald-200',
      accent: 'text-emerald-700',
      glow: 'shadow-emerald-200/50'
    }
  },
  {
    id: 'silver',
    name: 'مشتریان نقره ای',
    shortName: 'نقره‌ای',
    upTo3PiecesPercent: 40,
    fourAndAbovePercent: 60,
    description: 'خریداران وفادار با استایل خاص و خرید‌های مداوم در تمامی فصول',
    minAnnualSpendToman: 9000000,
    benefits: [
      '۴۰٪ تخفیف تا ۳ تیکه خرید',
      '۶۰٪ تخفیف برای ۴ تیکه به بالا',
      'ارسال رایگان اکسپرس در سراسر کشور',
      'پشتیبانی اختصاصی VIP و رزرو کالاهای محدود'
    ],
    colorTheme: {
      bg: 'bg-slate-50',
      badgeBg: 'bg-slate-200',
      badgeText: 'text-slate-800',
      border: 'border-slate-300',
      accent: 'text-slate-700',
      glow: 'shadow-slate-300/50'
    }
  },
  {
    id: 'gold',
    name: 'مشتریان طلایی',
    shortName: 'طلایی',
    upTo3PiecesPercent: 45,
    fourAndAbovePercent: 65,
    description: 'بالاترین رده باشگاه با حداکثر تخفیف شگفت‌انگیز ۶۵ درصدی',
    minAnnualSpendToman: 18000000,
    benefits: [
      '۴۵٪ تخفیف تا ۳ تیکه خرید',
      '۶۵٪ تخفیف برای ۴ تیکه به بالا (بیشترین سقف تخفیف)',
      'سفارش‌دوزی و تنظیم سایز رایگان در مزون',
      'کارت هدیه تولد و سالگرد عضویت VIP',
      'مشاوره استایلیست شخصی اختصاصی'
    ],
    colorTheme: {
      bg: 'bg-amber-50/60',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      border: 'border-amber-300',
      accent: 'text-amber-700',
      glow: 'shadow-amber-200/50'
    }
  }
];

// Curated high-fashion items for real interactive cart testing
export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 'prod-coat',
    name: 'پالتو پشمی فوتر ماکسی',
    category: 'پوشاک زنانه و مردانه',
    priceToman: 3850000,
    image: '/src/assets/images/fashion_coat_minimal_1793976369412.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'بژ شتری', hex: '#D2B48C' },
      { name: 'کرم صدفی', hex: '#F5F5DC' }
    ],
    tag: 'کالکشن زمستانه'
  },
  {
    id: 'prod-blazer',
    name: 'کت بلیزر ساختاریافته تک‌دکمه',
    category: 'کت و مانتو رسمی',
    priceToman: 2450000,
    image: '/src/assets/images/fashion_blazer_tailored_1793976369272.jpg',
    sizes: ['38', '40', '42', '44'],
    colors: [
      { name: 'دودی آنتراسیت', hex: '#333333' },
      { name: 'مشکی کلاسیک', hex: '#111111' }
    ],
    tag: 'پرفروش‌ترین'
  },
  {
    id: 'prod-shirt',
    name: 'پیراهن کتان ارگانیک یقه دیپلمات',
    category: 'پیراهن و شومیز',
    priceToman: 1350000,
    image: '/src/assets/images/fashion_shirt_linen_1793976370255.jpg',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'عاجی طبیعی', hex: '#FFFFF0' },
      { name: 'خاکی روشن', hex: '#C2B280' }
    ],
    tag: 'الیاف طبیعی'
  },
  {
    id: 'prod-boots',
    name: 'نیم‌بوت چرم طبیعی چلسی و کیف دستی',
    category: 'کیف و کفش چرم',
    priceToman: 2950000,
    image: '/src/assets/images/fashion_boots_leather_1793976369551.jpg',
    sizes: ['39', '40', '41', '42', '43'],
    colors: [
      { name: 'مشکی مات', hex: '#1C1917' },
      { name: 'قهوه‌ای شکلاتی', hex: '#4A2C2A' }
    ],
    tag: 'دست‌دوز تبریز'
  }
];

export const getDiscountPercent = (tierId: TierId, itemCount: number): number => {
  const tier = DISCOUNT_TIERS.find((t) => t.id === tierId) || DISCOUNT_TIERS[0];
  if (itemCount <= 0) return 0;
  return itemCount >= 4 ? tier.fourAndAbovePercent : tier.upTo3PiecesPercent;
};
