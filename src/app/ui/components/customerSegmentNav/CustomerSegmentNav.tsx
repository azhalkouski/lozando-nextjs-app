import Link from "next/link";
import {
  CustomerSegmentT,
  CustomerSegmentKeys,
  CustomerSegmentRoutes,
  CustomerSegmentLinkT
} from "@/app/types";
import styles from "./styles.module.css";

/**
 * At the top level all products are CURRENTLY segmentated by two groups:
 * 1. products for women
 * 2. products for men
 * 
 * A segment for `kids` might be added in future. But we don't sell
 * products for kids yet.
 * 
 * DATABASE LAYER: there is no such thing in the database layer as `customerType`, or
 * `segmentGroup`. In the database layer all products have the following
 * attributes: `gender`, `isForKids`. So, from the DATABASE LAYER perspective,
 * a segment group is a virtul group determined by `product.gender` value and
 * `product.isForKids` value.
 * 
 * CustomerSegmentNav allows users to navigate between pages (and thus products)
 * dedicated for Women and for Men.
 */


const segmentLinks: CustomerSegmentLinkT[] = [
  {
    href: CustomerSegmentRoutes.women,
    linkTitle: "Women",
    segmentKey: CustomerSegmentKeys.women,

  },
  {
    href: CustomerSegmentRoutes.men,
    linkTitle: "Men",
    segmentKey: CustomerSegmentKeys.men,
  },
];

type CustomerSegmentNavProps = {
  currentSegment: CustomerSegmentT;
}


function CustomerSegmentNav({ currentSegment }: CustomerSegmentNavProps) {

  return (
    <div className={styles.ctas}>
      {segmentLinks.map(({href, linkTitle, segmentKey}) => {
        return (
          <Link
            key={href}
            href={href}
            className={
              segmentKey === currentSegment
                ? styles.primary
                : styles.secondary
            }
          >
            {linkTitle}
          </Link>

        );
      })}
    </div>
  );
}

export default CustomerSegmentNav;
