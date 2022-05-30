import React, { FC } from "react";

interface HeaderRowProps {
  openIssues: number;
}

export const HeaderRow: FC<HeaderRowProps> = ({ openIssues }) => {
  return <div>HeaderRow {openIssues}</div>;
};

// export default HeaderRow
