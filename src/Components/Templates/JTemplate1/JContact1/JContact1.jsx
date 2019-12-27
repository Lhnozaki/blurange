import React from "react";
import "../../index.scss";
import styles from "./JContact1.module.scss";
import JHeader1 from "../JHeader1/JHeader1";

export default function JContact1() {
  return (
    <div className="templateWrapper">
      <JHeader1 />
      <div id={styles.container}>
        <div className={styles.imgContainer}></div>
        <h1 className={styles.content}>Connect with me today.</h1>
        <section id={styles.aboutContent}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h2>Code Shop Support</h2>
              <p>
                Purchased a Code Shop product and you're having issues? Need
                another download request for your access file? Then you've come
                to the right place.
              </p>
              <a href="example.com">SUBMIT TICKET</a>
            </div>
            <div className={styles.card}>
              <h2>Hire an Expert</h2>
              <p>
                Are you looking for a Web developer? Or maybe you need some
                consulting or training services? Send an inquiry or just call
                555-555-1031.
              </p>
              <a href="example.com">SEND INQUIRY</a>
            </div>
            <div className={styles.card}>
              <h2>General Questions</h2>
              <p>
                Feel free to reach out to me if you have any questions or
                comments about the services I offer. Also, you could always just
                send me a friendly hello.
              </p>
              <a href="example.com">SAY HELLO</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
