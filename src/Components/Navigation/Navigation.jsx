import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

export default function Navigation({ isAuth }) {
  return (
    <nav className={styles.navigation}>
      <Link to="/">home</Link>
      {isAuth && <Link to="/editor">editor</Link>}
      {isAuth && <Link to="/dashboard">dashboard</Link>}
      <Link to="/design-system">design system</Link>
      <Link to="/templates">templates</Link>
    </nav>
  );
}
