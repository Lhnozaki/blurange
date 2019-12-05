import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileNav.module.scss';

const MobileNav = ({ isAuth }) => {
    return (
        <nav className={styles.navigation}>
            <Link to="/">home</Link>
            {isAuth && <Link to="/editor">editor</Link>}
            {isAuth && <Link to="/dashboard">dashboard</Link>}
        </nav>
    )
}

export default MobileNav;