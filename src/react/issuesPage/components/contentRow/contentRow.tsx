import React, { FC } from "react";
import classNames from "classnames";
import { Issue } from "../../../../redux/issues";
import { ReactComponent as CommentIcon } from "../../../../assets/commentIcon.svg";
import styles from "./styles.module.scss";

interface ContentRowProps {
  payload: Issue;
  isLastRow?: boolean;
}

export const ContentRow: FC<ContentRowProps> = ({
  payload,
  isLastRow = false,
}) => {
  return (
    <div
      data-testid="content-row-root"
      className={classNames(
        styles.container,
        isLastRow && styles.lastContainer
      )}
    >
      <div className={styles.iconSection}>
        <span className={styles.elipse}>
          <span className={styles.dot} />
        </span>
      </div>
      <div className={styles.contentSection}>
        <div style={{ marginBottom: "3px" }}>
          <span className={styles.title}>{payload.title}</span>
        </div>
        <div className={styles.lastOpened}>
          <span data-testid="issue-number">{payload.number}</span> opened by{" "}
          {payload.user?.login} <span>{payload.createdAt}</span>
        </div>
      </div>
      <div className={styles.commentSection}>
        {!!payload.commentsCount && payload.commentsCount > 0 && (
          <div data-testid="comments-count">
            <CommentIcon />
            <label className={styles.commentsCount}>
              {payload.commentsCount}
            </label>
          </div>
        )}
      </div>
    </div>
  );
};
