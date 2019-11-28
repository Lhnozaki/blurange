import React from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';
import styles from './JTemplate1.module.scss';

export default function JTemplate1() {
  return (
    <div id={styles.container} className="templateWrapper">
      <nav className={styles.navigation}>
        <Link to="/templates">back</Link>
        <Link to="/">home</Link>
        <Link to="/">about</Link>
        <Link to="/design-system">portfolio</Link>
        <Link to="/templates">resume</Link>
        <Link to="/templates">contact</Link>
      </nav>
      <h1 className={styles.content}>Developer.</h1>
      <input></input>
    </div>
  );
}
