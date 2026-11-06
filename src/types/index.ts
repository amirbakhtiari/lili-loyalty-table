export type TierId = 'white' | 'green' | 'silver' | 'gold';

export interface DiscountTier {
  id: TierId;
  name: string; // e.g. مشتریان سفید
  shortName: string; // سفید
  colorTheme: {
    bg: string;
    badgeBg: string;
    badgeText: string;
    border: string;
    accent: string;
    glow: string;
  };
  upTo3PiecesPercent: number; // e.g. 30%
  fourAndAbovePercent: number; // e.g. 50%
  description: string;
  minAnnualSpendToman: number;
  benefits: string[];
}

export interface CatalogProduct {
  id: string;
  name: string;
  category: string;
  priceToman: number;
  image: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  tag?: string;
}

export interface CartItem {
  product: CatalogProduct;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
