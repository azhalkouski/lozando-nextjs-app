"use client"

import IconButton from "@mui/material/IconButton";
import Image from "next/image";

import styles from "./styles.module.css";



function LocalizationIconButton() {

  function handleLocalizationIconClick() {
    console.log('handleLocalizationIconClick');
  }

  return (
    <IconButton
      aria-label="change language"
      onClick={handleLocalizationIconClick}
      className={styles.iconButton}
    >
      <Image
        src={`/globe.svg`}
        alt="Logo icon"
        width={23}
        height={23}
      />
    </IconButton>
  );
}

export default LocalizationIconButton;
