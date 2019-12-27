import React from "react";
import { Link } from "react-router-dom";
import styles from "./JNavigation1.module.scss";

export default function JNavigation1() {
  return (
    <nav className={styles.navigation}>
      <Link to="/Templates/JTemplate1">HOME</Link>
      <Link to="/Templates/JTemplate1/JAbout1">ABOUT</Link>
      <Link to="/Templates/JTemplate1/JPortfolio1">PORTFOLIO</Link>
      <Link to="/Templates/JTemplate1/JResume1">RESUME</Link>
      <Link to="/Templates/JTemplate1/JContact1">CONTACT</Link>
    </nav>
  );
}
