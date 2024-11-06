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
