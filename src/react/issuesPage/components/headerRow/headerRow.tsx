import React, { FC } from "react";
import styles from "./styles.module.scss";

interface HeaderRowProps {
  openIssues: number;
}

export const HeaderRow: FC<HeaderRowProps> = ({ openIssues }) => {
  return (
    <div data-testid="header-row-root" className={styles.container}>
      <div className={styles.iconSection}>
        <span className={styles.elipse}>
          <span className={styles.dot} />
        </span>
      </div>
      <div className={styles.contentSection}>
        <span data-testid="header-row-content" className={styles.title}>
          {openIssues} Open
        </span>
      </div>
    </div>
  );
};
