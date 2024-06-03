import Image from "next/image";

import styles from "./Header.module.css";

/**
 * Header component having IG's logo
 */
export const Header = () => (
  <div className={styles.header}>
    <Image src='/logo.svg' alt='IG' width={104} height={30} />
  </div>
);
