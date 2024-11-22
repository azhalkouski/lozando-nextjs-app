"use client"
import Image from "next/image";
import useIsCurrentlyDarkTheme from "../../hooks/useIsCurrentlyDarkTheme";

function Logo() {
  const isDarkPrefered = useIsCurrentlyDarkTheme();

  const logoColor = isDarkPrefered ? "dark" : "light";

  return (
    <Image
      src={`/logo-${logoColor}-theme.svg`}
      alt="Logo icon"
      width={35}
      height={35}
    />
  );
}

export default Logo;
