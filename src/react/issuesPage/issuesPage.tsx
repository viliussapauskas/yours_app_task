import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getIssuesStateSelector } from "../../redux/issues";
import { Layout } from "../components";
import { ContentRow } from "./components";
import { HeaderRow } from "./components/headerRow";
import styles from "./styles.module.scss";

export const IssuesPage = () => {
  const { value, status } = useAppSelector(getIssuesStateSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!value && status !== "loading") navigate("/");
  });

  return (
    <Layout style={styles.layout}>
      <div>
        {status === "failed" && <h1>Error occoured</h1>}
        {status === "loading" && <h1>Loading...</h1>}
        {status === "idle" && value && (
          <div className={styles.pageContainer}>
            <div className={styles.titleContainer}>
              <span className={styles.title}>Issues</span>
              <span className={styles.numberOfIssues}>{value.length}</span>
            </div>
            <div className={styles.contentContainer}>
              <HeaderRow openIssues={value.length} />
              {value.map((x, index) => (
                <div key={x.id}>
                  <ContentRow
                    payload={x}
                    isLastRow={value.length === index + 1}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
