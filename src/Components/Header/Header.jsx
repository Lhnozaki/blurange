import React from 'react'
import styles from './Header.module.scss'
import Navigation from '../Navigation'
import { Link } from "react-router-dom";

const Header = ({ isAuth, credentials, setLoginOn }) => {
    return (
        <header className={styles.header}>
            <Link className={styles.siteBranding} to="/">blurange</Link>
            <div className={styles.rightHeader}>
                <Navigation />
                {isAuth && <p className={styles.loggedInAs}>hi <span className="color-orange">{credentials.username}</span></p>}
                <div className={styles.loginBtns}>
                    <button onClick={() => setLoginOn(true)}>{isAuth ? 'logout' : 'login'}</button>
                    <button className="alt-btn">sign up</button>
                </div>
            </div>

        </header>
    )
}

export default Header;