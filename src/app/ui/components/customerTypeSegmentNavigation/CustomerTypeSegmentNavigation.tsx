import Link from "next/link";
import styles from "./styles.module.css";

function CustomerTypeSegmentNavigation() {
  return (
    <div className={styles.ctas}>
      <Link href="/women-page" className={styles.primary}>Women</Link>
      <Link href="/men-page" className={styles.primary}>Men</Link>
    </div>
  );
}

export default CustomerTypeSegmentNavigation;
