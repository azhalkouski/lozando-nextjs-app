"use client"

import Link from "next/link";

function ProductCategoriesGroupsNav() {
  const clothingHref = '/women-clothing';
  const shoesHref = '/women-shoes';

  return (
    <div style={{border: '1px solid green'}}>
      <Link href={clothingHref}>Clothing</Link>
      <Link href={shoesHref}>Shoes</Link>
    </div>
  );
}

export default ProductCategoriesGroupsNav;
