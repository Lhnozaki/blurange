import React from "react";
import "../../index.scss";
import styles from "./JPortfolio1.module.scss";
import JHeader1 from "../JHeader1/JHeader1";
import { ReactComponent as Logo } from "./github.svg";

export default function JPortfolio1() {
  return (
    <div className="templateWrapper">
      <JHeader1 />
      <div id={styles.container}>
        <h1 className={styles.content}>Check out my projects on github.</h1>
        <div className={styles.card}>
          <a
            className={styles.links}
            href="https://github.com/badmckinney/badmckinney-portfolio"
          >
            <Logo width={30} height={30} /> Badmckinney Portfolio
          </a>
          <p className={styles.description}>
            A digital resumé / portfolio for Brad McKinney
          </p>
        </div>
        <div className={styles.card}>
          <a
            className={styles.links}
            href="https://github.com/badmckinney/edslist"
          >
            <Logo width={30} height={30} /> Edslist
          </a>
          <p className={styles.description}>
            A Craigslist-inspired CMS built with React and PostgreSQL in a
            Docker container and deployed on AWS
          </p>
        </div>
        <div className={styles.card}>
          <a
            className={styles.links}
            href="https://github.com/melsoriano/thoughtcatcher"
          >
            <Logo width={30} height={30} /> Thoughtcatcher
          </a>
          <p>Note taking app built with Serverless and React on AWS</p>
        </div>
        <div className={styles.card}>
          <a className={styles.links} href="example1.com">
            <Logo width={30} height={30} /> Git Stats
          </a>
          <p className={styles.description}>
            A better view of your GitHub profile with charts.
          </p>
        </div>
      </div>
    </div>
  );
}
