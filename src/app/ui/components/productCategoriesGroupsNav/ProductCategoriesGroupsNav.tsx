"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../../../page.module.css";

type customerType = "women" | "men";

const categoriesGroupsLinks = {
  women: [
    {
      href: "/women-clothing",
      groupTitle: "Clothing"
    },
    {
      href: "/women-shoes",
      groupTitle: "Shoes"
    },
  ],
  men: [
    {
      href: "/men-clothing",
      groupTitle: "Clothing"
    },
    {
      href: "/men-shoes",
      groupTitle: "Shoes"
    },
  ]
} as {[key in customerType]: {href: string, groupTitle: string}[]};

function ProductCategoriesGroupsNav() {
  const pathname = usePathname();

  const customerTypeSegment = pathname.slice(1).split('-')[0] as customerType;
  const links = categoriesGroupsLinks[customerTypeSegment];

  if (links === undefined) {
    // TODO: logger.error(`Unsupported route segment as customerTypeSegment - ${customerTypeSegment}`);
    // ! Error boudaries? React suspense?
    throw new Error(`Unsupported route segment as customerTypeSegment`);
  }

  return (
    <div className={styles.ctas}>
      {links.map(({href, groupTitle}) => {
        return (
          <Link key={href} href={href} className={styles.secondary}>{groupTitle}</Link>
        );
      })}
    </div>
  );
}

export default ProductCategoriesGroupsNav;
