import Link from "next/link";
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

function CustomerTypeSegregationNav() {
  return (
    <div className={styles.ctas}>
      <Link href="/women-home" className={styles.primary}>Women</Link>
      <Link href="/men-home" className={styles.primary}>Men</Link>
    </div>
  );
}

export default CustomerTypeSegregationNav;

/**
 * Active Nav Links
 * 
 * You can use the usePathname() hook to determine if nav Link is active.
 * 
 * Since usePathname() is a client hook, you need to extract the nav links into
 * a Client Component, which can be imported into your layout or template.
 */
