import Image from "next/image";

import styles from './IconButton.module.css';
import { IconButtonProps } from "./IconButton.types";

export const IconButton = (props: IconButtonProps) => {
  const { icon, onClick } = props;

  return (
    <button className={styles.btn} onClick={onClick}>
      <Image src={icon} alt='btn' height={24} width={24} />
    </button>
  );
};
