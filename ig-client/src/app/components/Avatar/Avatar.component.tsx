import Image from "next/image";

import styles from "./Avatar.module.css";
import { AvatarProps } from "./Avatar.types";

/**
 * `Avatar` component used to render image in a profile like rounded fashion
 */
export const Avatar = (props: AvatarProps) => {
  const { src, name, borderType, size = "medium" } = props;

  return (
    <div
      className={`${
        borderType === "gradient"
          ? `${styles.avatarGradient} ${styles.avatarWrapper}`
          : ""
      }`}
    >
      <Image
        src={src || "/default.jpg"}
        alt={name}
        height={size === "medium" ? 56 : 32}
        width={size === "medium" ? 56 : 32}
        className={`${styles.avatar} ${
          borderType === "default" ? styles.noBorder : ""
        }`}
      />
    </div>
  );
};
