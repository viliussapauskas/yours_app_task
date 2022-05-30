import React, { FC } from "react";
import styles from "./styles.module.scss";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import classNames from "classnames";

interface LayoutProps {
  style?: string;
  children: any;
}

export const Layout: FC<LayoutProps> = ({ style, children }) => {
  return (
    //   init styles + intefaces styles
    <div className={classNames(styles.layout, style && style)}>
      <div className={styles.logo}>{<Logo />}</div>
      <div className={styles.child}>{children}</div>
    </div>
  );
};
