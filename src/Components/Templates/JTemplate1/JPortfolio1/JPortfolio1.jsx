import React, { useEffect, useRef } from 'react';
import styles from './JPortfolio1.module.scss';
import JHeader1 from '../JHeader1/JHeader1';
import { gsap } from 'gsap';

export default function JPortfolio1() {
  let page = useRef(null);

  useEffect(() => {
    gsap.from(page, 0.8, {
      delay: 0.8,
      ease: 'power3.out',
      x: 1200,
      stagger: {
        amount: 0.15
      }
    });
  });

  return (
    <div className="templateWrapper">
      <JHeader1 />
      <div id={styles.container}>
        <h1 ref={el => (page = el)} className={styles.content}>
          Portfolio
        </h1>
      </div>
    </div>
  );
}
