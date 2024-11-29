export type ProductT = {
  articleNumber: string;
  category: string;
  subCategory: string;
  gender: string;
  isForKids: boolean;
  brand: string;
  name: string;
  sizes: string[];
  color: string;
  pattern: string;
  neckline: string;
  collar: string;
  materials: {[key: string]: string};
  sleeveLength: string;
  shape: string;
  fit: string;
  clothingLength: string;
  totalLength: string;
  trouserRise: string;
  fastening: string;
  multipack: string;
  pockets: string;
  qualities: string;
  backWidth: string;
  hoodDetail: string;
  specialSize: string;
  occasion: string;
  style: string;
  cut: string;
  collection: string;
  details: string;
  purchasePrice: string;
};;

export enum CustomerSegmentRoutes {
  women = "/women",
  men = "/men",
}

export enum CustomerSegmentKeys {
  women = "women",
  men = "men"
};

export enum CustomerSegmentSlugs {
  clothing = "/clothing",
  shoes = "/shoes",
}

export enum CustomerSegmentSlugKeys {
  clothing = "clothing",
  shoes = "shoes",
}

// RECONSIDER
export enum RouteSegmentsEnum {
  WomenClothing = "/women-clothing",
  WomenShoes = "/women-shoes",
  MenClothing = "/men-clothing",
  MenShoes = "/men-shoes",
};

export type CustomerSegmentT = 'women' | 'men';

export type CustomerSegmentSlugT = 'clothing' | 'shoes';

export type CustomerSegmentLinkT = {
  href: string;
  linkTitle: string;
  segmentKey: CustomerSegmentKeys;
}

export type CategoryGroupSlugT = {
  slugHref: string;
  linkTitle: string;
};

export type CategoryGroupLinkT = {
  href: string;
  linkTitle: string;
};

