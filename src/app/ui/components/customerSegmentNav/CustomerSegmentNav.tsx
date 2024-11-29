"use client"

import Link from "next/link";
import useCurrenCustomerSegment from '../../hooks/useCurrenCustomerSegment';
import { CustomerSegmentKeysEnum, RouteSegmentsEnum, CustomerSegmentLinkT } from "@/app/types";
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
    href: RouteSegmentsEnum.WomenHome,
    linkTitle: "Women",
    segmentKey: CustomerSegmentKeysEnum.women,

  },
  {
    href: RouteSegmentsEnum.MenHome,
    linkTitle: "Men",
    segmentKey: CustomerSegmentKeysEnum.men,
  },
];


// ! function CustomerSegmentNav(customerSegment: 'women' | 'men') {
function CustomerSegmentNav() {
  const currentCustomerSegment: CustomerSegmentKeysEnum =
    useCurrenCustomerSegment(); // ! bad?


  return (
    <div className={styles.ctas}>
      {segmentLinks.map(({href, linkTitle, segmentKey}) => {
        return (
          <Link
            key={href}
            href={href}
            className={
              segmentKey === currentCustomerSegment
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
