import React from 'react'
import styles from './Header.module.scss'
import Navigation from '../Navigation'
import { Link } from "react-router-dom";

const Header = ({ isAuth, setAuth }) => {
    return (
        <header className={styles.header}>
            <Link className={styles.siteBranding} to="/">blurange</Link>
            <Navigation />
            <div className={styles.loginBtns}>
                <button onClick={() => setAuth(!isAuth)}>{isAuth ? 'logout' : 'login'}</button>
                <button className="alt-btn">sign up</button>
            </div>
        </header>
    )
}

export default Header;