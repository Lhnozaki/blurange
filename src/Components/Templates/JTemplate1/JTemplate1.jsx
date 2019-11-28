import React from 'react';
import '../index.scss';
import styles from './JTemplate1.module.scss';
import JHeader1 from './JHeader1/JHeader1';

export default function JTemplate1() {
  return (
    <div id={styles.container} className="templateWrapper">
      <JHeader1 />
      <h1 className={styles.content}>DEVELOPER.</h1>
    </div>
  );
}
