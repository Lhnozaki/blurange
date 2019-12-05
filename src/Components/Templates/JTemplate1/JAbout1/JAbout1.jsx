import React from 'react';
import '../../index.scss';
import styles from './JAbout1.module.scss';
import JHeader1 from '../JHeader1/JHeader1';

export default function JAbout1() {
  return (
    <div className="templateWrapper">
      <JHeader1 />
      <div id={styles.container}>
        <h1 className={styles.content}>About</h1>
      </div>
    </div>
  );
}
