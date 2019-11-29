import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import styles from "./ATemplate2.module.scss";

export default function ATemplate2() {
  return (
    <div id={styles.container} className="templateWrapper">
      <h1>Testing</h1>
      <Link to="templates">Back</Link>
    </div>
  );
}
