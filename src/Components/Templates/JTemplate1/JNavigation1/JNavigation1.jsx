import React from 'react';
import { Link } from 'react-router-dom';
import styles from './JNavigation1.module.scss';

export default function JNavigation1() {
  return (
    <nav className={styles.navigation}>
      <Link to="/templates/jtemplate1">HOME</Link>
      <Link to="/templates/jtemplate1/about">ABOUT</Link>
      <Link to="/templates/jtemplate1/portfolio">PORTFOLIO</Link>
      <Link to="/templates/jtemplate1/resume">RESUME</Link>
      <Link to="/templates/jtemplate1/contact">CONTACT</Link>
    </nav>
  );
}
