import { CustomerSegmentSlugT, CustomerSegmentT, PageRouteKeyT } from "../types";

/**
 * @returns metadata - page titles
 */
export function getPageTitle(
  customerSegment: CustomerSegmentT,
  segmentSlug?: CustomerSegmentSlugT,
) {
  const pageRouteKey: PageRouteKeyT = segmentSlug
    ? `${customerSegment}/${segmentSlug}`
    : `${customerSegment}`;

    const pageTitles: {[key in PageRouteKeyT]: string} = {
    "women": "Women home page with mixed clothing and shoes products",
    "women/clothing": "Women clothing products",
    "women/shoes": "Women shoes products",
    "men": "Men home page with mixed clothing and shoes products",
    "men/clothing": "Men clothing",
    "men/shoes": "Men shoes"
  };
  
  return pageTitles[pageRouteKey];
};
