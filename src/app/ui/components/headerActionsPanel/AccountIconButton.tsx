"use client"

import IconButton from "@mui/material/IconButton";
import Image from "next/image";

import styles from "./styles.module.css";



function AccountIconButton() {

  function handleAccountIconClick() {
    console.log('handleAccountIconClick');
  }

  return (
    <IconButton
      aria-label="change language"
      onClick={handleAccountIconClick}
      className={styles.iconButton}
    >
      <Image
        src={`/dancer-motion-svgrepo-com.svg`}
        alt="Account holder icon"
        width={25}
        height={25}
      />
    </IconButton>
  );
}

export default AccountIconButton;
