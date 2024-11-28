"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

/**
 * At the top level all products are CURRENTLY segregated in two groups:
 * 1. products for women
 * 2. products for men
 * 
 * A segregation group `kids` might be added in future. But we don't sell
 * products for kids yet.
 * 
 * DATABASE LAYER: there is no such thing in the database layer as `customerType`, or
 * `seggregationGroup`. In the database layer all products have the following
 * attributes: `gender`, `isForKids`. So, from the DATABASE LAYER perspective,
 * a segregation group is a virtul group determined by `product.gender` value and
 * `product.isForKids` value.
 * 
 * CustomerTypeSegregationNav allows user to navigate between pages (and thus products)
 * dedicated for Women and for Men.
 */

const segmentationLinks = [
  {
    href: "/women-home",
    segmentTitle: "Women"
  },
  {
    href: "/men-home",
    segmentTitle: "Men"
  },
];

function CustomerTypeSegregationNav() {
  const pathname = usePathname();

  function getLinkClassName(href: string) {
    return pathname === href ? styles.primary : styles.secondary;
  }

  return (
    <div className={styles.ctas}>
      {segmentationLinks.map(({href, segmentTitle}) => {
        return (
          <Link key={href} href={href} className={getLinkClassName(href)}>
            {segmentTitle}
          </Link>

        );
      })}
    </div>
  );
}

export default CustomerTypeSegregationNav;
