import Link from "next/link";
import { CustomerSegmentT, CategoryGroupLinksT, RouteSegmentsEnum } from "@/app/types";

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

type ProductCategoriesGroupsNavProps = {
  currentSegment: CustomerSegmentT;
}


function ProductCategoriesGroupsNav({ currentSegment }: ProductCategoriesGroupsNavProps) {
  const links = categoryGroupsLinks[currentSegment];

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
