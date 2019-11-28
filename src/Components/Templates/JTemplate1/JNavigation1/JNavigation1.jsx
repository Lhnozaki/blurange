import React from 'react';
import { Link } from 'react-router-dom';
import styles from './JNavigation1.module.scss';

export default function JNavigation1() {
  return (
    <nav className={styles.navigation}>
      <Link to="/JTemplate1">HOME</Link>
      <Link to="/">ABOUT</Link>
      <Link to="/">PORTFOLIO</Link>
      <Link to="/">RESUME</Link>
      <Link to="/">CONTACT</Link>
    </nav>
  );
}
