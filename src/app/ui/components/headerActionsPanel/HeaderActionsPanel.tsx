"use client"

import LocalizationIconButton from "./LocalizationIconButton";
import AccountIconButton from "./AccountIconButton";
import CartIconButton from "./CartIconButton";

import styles from "./styles.module.css";



function HeaderActionsPanel() {

  return (
    <div className={styles.ctas}>
      <LocalizationIconButton />
      <AccountIconButton />
      <CartIconButton />
    </div>
  );
}

export default HeaderActionsPanel;
