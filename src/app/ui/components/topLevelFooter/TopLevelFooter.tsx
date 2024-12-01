
import Image from "next/image";

import styles from "../../../page.module.css";


export default function TopLevelFooter() {
  return (
    <footer className={styles.footer} style={{ border: '1px solid orange' }}>
      <a
        href="https://github.com/azhalkouski/lozando-nextjs-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        href="https://github.com/azhalkouski/lozando-nextjs-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        href="https://github.com/azhalkouski/lozando-nextjs-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Discover more
      </a>
    </footer>
  );
};
