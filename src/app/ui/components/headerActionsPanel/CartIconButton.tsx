"use client"

import IconButton from "@mui/material/IconButton";
import Image from "next/image";

import styles from "./styles.module.css";



function CartIconButton() {

  function handleCartIconClick() {
    console.log('handleCartIconClick');
  }

  return (
    <IconButton
      aria-label="change language"
      onClick={handleCartIconClick}
      className={styles.iconButton}
    >
      <Image
        src={`/cart-5-svgrepo-com.svg`}
        alt="Cart icon"
        width={25}
        height={25}
      />
    </IconButton>
  );
}

export default CartIconButton;
