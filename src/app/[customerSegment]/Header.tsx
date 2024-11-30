import Logo from "../ui/components/logo";
import CustomerSegmentNav from "../ui/components/customerSegmentNav";
import ProductCategoriesGroupsNav from "../ui/components/productCategoriesGroupsNav";
import HeaderActionsPanel from "../ui/components/headerActionsPanel";
import ProductsSearch from "../ui/components/productsSearch";
import { CustomerSegmentT } from "../types";

import styles from "../page.module.css";

type Props = {
  customerSegment: CustomerSegmentT;
};

export default function Header({ customerSegment }: Props) {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.customerTypeSegregationNav}>
        <CustomerSegmentNav currentSegment={customerSegment} />
      </div>
      <div className={styles.headerLogo}>
        <Logo />
      </div>
      <div className={styles.headerActionsPanel}>
        <HeaderActionsPanel />
      </div>
      <div className={styles.productCategoriesGroupsNav}>
        <ProductCategoriesGroupsNav currentSegment={customerSegment} />
      </div>
      <div className={styles.productsSearch}>
        <ProductsSearch />
      </div>
    </header>
  );
}