import React from "react";
import styles from "./JHeader1.module.scss";
import JNavigation1 from "../JNavigation1";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function JHeader1() {
  return (
    <header className={styles.header}>
      <Link to="/editor/templates">
        <div className={styles.back}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            className={styles.backArrow}
          />
        </div>
      </Link>
      <div className={styles.logoBox}>
        <div className={styles.logoInitial1}>A</div>
        <div className={styles.logoSlash}></div>
        <div className={styles.logoInitial2}>D</div>
      </div>
      <div className={styles.rightHeader}>
        <JNavigation1 />
      </div>
    </header>
  );
}
