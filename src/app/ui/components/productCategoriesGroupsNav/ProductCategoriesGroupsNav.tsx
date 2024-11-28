"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import useCurrenCustomerTypeSegment from "../../hooks/useCurrenCustomerTypeSegment";
import { CategoryGroupLinksT, RouteSegmentsEnum } from "@/app/types";

import styles from "../../../page.module.css";


const categoryGroupsLinks: CategoryGroupLinksT = {
  women: [
    {
      href: RouteSegmentsEnum.WomenClothing,
      linkTitle: "Clothing",
    },
    {
      href: RouteSegmentsEnum.WomenShoes,
      linkTitle: "Shoes",
    },
  ],  men: [
    {
      href: RouteSegmentsEnum.MenClothing,
      linkTitle: "Clothing",
    },
    {
      href: RouteSegmentsEnum.MenShoes,
      linkTitle: "Shoes",
    },
  ]
};

function ProductCategoriesGroupsNav() {
  const currentCustomerTypeSegment = useCurrenCustomerTypeSegment();

  const links = categoryGroupsLinks[currentCustomerTypeSegment];

  return (
    <div className={styles.ctas}>
      {links.map(({href, linkTitle}) => {
        return (
          <Link key={href} href={href} className={styles.secondary}>{linkTitle}</Link>
        );
      })}
    </div>
  );
}

export default ProductCategoriesGroupsNav;
