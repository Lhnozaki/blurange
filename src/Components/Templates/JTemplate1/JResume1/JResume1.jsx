import React from 'react';
import '../../index.scss';
import styles from './JResume1.module.scss';
import JHeader1 from '../JHeader1/JHeader1';

export default function JResume1() {
  return (
    <div className="templateWrapper">
      <JHeader1 />
      <div id={styles.container}>
        <h1 className={styles.content}>Resume</h1>
      </div>
    </div>
  );
}
