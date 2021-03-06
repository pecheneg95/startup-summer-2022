import React from "react";

import searchImg from "../../assets/svg/search.svg";
import styles from "./MainPage.module.css";

function StartPage() {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyStateMessage}>
        <img src={searchImg} alt="start message"></img>
        <p className={styles.message}>Start with searching a GitHub user</p>
      </div>
    </div>
  );
}
export default React.memo(StartPage);
