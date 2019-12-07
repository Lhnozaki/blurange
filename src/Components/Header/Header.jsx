import React from 'react'
import styles from './Header.module.scss'
import Navigation from '../Navigation'
import { Link } from "react-router-dom";

const Header = ({ isAuth, credentials, setMenu, showMenu, toggleLoginStatus }) => {


    return (
        <header className={styles.header}>
            <Link className={styles.siteBranding} to="/">blurange</Link>
            <div className={styles.rightHeader}>
                <button className={styles.mobileMenuBtn} onClick={() => setMenu(!showMenu)}>
                    {showMenu ? 'close' : 'menu'}
                </button>
                <Navigation isAuth={isAuth} />
                {isAuth && <p className={styles.loggedInAs}>hi <span className="color-orange">{credentials.username}</span></p>}
                <div className={styles.loginBtns}>
                    <button onClick={toggleLoginStatus}>{isAuth ? 'logout' : 'login'}</button>
                    {!isAuth && <button className="alt-btn">sign up</button>}
                </div>
            </div>

        </header>
    )
}

export default Header;