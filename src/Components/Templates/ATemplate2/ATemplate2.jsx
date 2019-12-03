import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import styles from "./ATemplate2.module.scss";

export default function ATemplate2() {
  return (
    <div id={styles.container} className="templateWrapper">
      <div className={styles.menu}>
        <button className={styles.menuBtn}>></button>
        <div className={styles.menuContent}>
          <Link to="/templates">Go back</Link>
          <Link to="/">Contact Me</Link>
          <Link to="/">GitHub</Link>
          <Link to="/">LinkedIn</Link>
        </div>
      </div>

      <div className={styles.slider}>
        <div className={styles.slide}>Slide 1</div>
        <div className={styles.slide}>Slide 2</div>
        <div className={styles.slide}>Slide 3</div>
        <div className={styles.slide}>Slide 4</div>
        <div className={styles.slide}>Slide 5</div>
      </div>
    </div>
  );
}
