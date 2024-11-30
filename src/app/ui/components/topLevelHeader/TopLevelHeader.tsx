import Logo from "../logo";
import CustomerSegmentNav from "../customerSegmentNav";
import ProductCategoriesGroupsNav from "../productCategoriesGroupsNav";
import HeaderActionsPanel from "../headerActionsPanel";
import ProductsSearch from "../productsSearch";
import { CustomerSegmentT } from "../../../types";

import styles from "../page.module.css";

type Props = {
  customerSegment: CustomerSegmentT;
};

export default function TopLevelHeader({ customerSegment }: Props) {
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