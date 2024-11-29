export type ProductT = {
  id: number;
  discountId: number | null;
  modelName: string;
  description?: string;
  brandId: number;
  categoryId: number;
  size: string;
  color: string;
  forMen: boolean;
  forWomen: boolean;
  price: number;
  createdAt: Date;
};

export enum CustomerSegmentRoutes {
  women = "/women",
  men = "/men",

}

// RECONSIDER
export enum RouteSegmentsEnum {
  WomenClothing = "/women-clothing",
  WomenShoes = "/women-shoes",
  MenClothing = "/men-clothing",
  MenShoes = "/men-shoes",
};

export enum CustomerSegmentKeys {
  women = "women",
  men = "men"
};

export type CustomerSegmentT = 'women' | 'men';

export type CustomerSegmentLinkT = {
  href: string;
  linkTitle: string;
  segmentKey: CustomerSegmentKeys;
}

export type CategoryGroupLinkT = {
  href: string;
  linkTitle: string;
};

export type CategoryGroupLinksT = {
  [key in CustomerSegmentKeys]: CategoryGroupLinkT[]
};

