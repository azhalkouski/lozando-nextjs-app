import {
  CustomerSegmentKeys,
  CustomerSegmentSlugKeys,
  GenderT,
  CategoryGroupT
} from "../types";

export const genderByCustomerSegment: {[key in CustomerSegmentKeys]: GenderT} = {
  women: 'women',
  men: 'men',
};

export const categoryGroupBySegmentSlug: {
  [key in CustomerSegmentSlugKeys]: CategoryGroupT
} = {
  clothing: 'clothing',
  shoes: 'shoes'
};
