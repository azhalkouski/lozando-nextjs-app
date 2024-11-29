import Link from "next/link";
import {
  CustomerSegmentT,
  CategoryGroupSlugT,
  CategoryGroupLinkT,
  CustomerSegmentSlugs
} from "@/app/types";

import styles from "../../../page.module.css";

const categoryGroupsSlugs: CategoryGroupSlugT[] = [
  {
    slugHref: CustomerSegmentSlugs.clothing,
    linkTitle: "Clothing",
  },
  {
    slugHref: CustomerSegmentSlugs.shoes,
    linkTitle: "Shoes",
  },
];

type ProductCategoriesGroupsNavProps = {
  currentSegment: CustomerSegmentT;
}


function ProductCategoriesGroupsNav({
  currentSegment
}: ProductCategoriesGroupsNavProps) {
  const links: CategoryGroupLinkT[] = categoryGroupsSlugs.map((groupSlug) => {
    return {
      href: `/${currentSegment}${groupSlug.slugHref}`,
      linkTitle: groupSlug.linkTitle,
    }
  });

  return (
    <div className={styles.ctas}>
      {links.map(({href, linkTitle}) => {
        return (
          <Link key={href} href={href} className={styles.secondary}>
            {linkTitle}
          </Link>
        );
      })}
    </div>
  );
}

export default ProductCategoriesGroupsNav;
