import React, { FC } from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  onClick: Function;
}

export const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} type={"button"} onClick={() => onClick()}>
      Show issues
    </button>
  );
};
