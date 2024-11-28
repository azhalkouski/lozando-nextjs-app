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

export enum RouteSegmentsEnum {
  WomenHome = "/women-home",
  WomenClothing = "/women-clothing",
  WomenShoes = "/women-shoes",
  MenHome = "/men-home",
  MenClothing = "/men-clothing",
  MenShoes = "/men-shoes",
};

export enum CustomerTypeSegmentKeysEnum {
  women = "women",
  men = "men"
};

export type CustomerTypeSegmentLinkT = {
  href: string;
  linkTitle: string;
  segmentKey: CustomerTypeSegmentKeysEnum;
}

export type CategoryGroupLinkT = {
  href: string;
  linkTitle: string;
};

export type CategoryGroupLinksT = {
  [key in CustomerTypeSegmentKeysEnum]: CategoryGroupLinkT[]
};

