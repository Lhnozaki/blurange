import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import styles from "./ATemplate2.module.scss";

export default function ATemplate2() {
  return (
    <div id={styles.container} className="templateWrapper">
      <div className={styles.menu}>
        <button className={styles.menuBtn}>Dropdown</button>
        <div className={styles.menuContent}>
          <Link to="/templates">Go back</Link>
          <Link to="/">Contact Me</Link>
          <Link to="/">GitHub</Link>
          <Link to="/">LinkedIn</Link>
        </div>
      </div>
    </div>
  );
}
