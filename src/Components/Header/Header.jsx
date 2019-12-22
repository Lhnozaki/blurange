import React from 'react'
import styles from './Header.module.scss'
import Navigation from '../Navigation'
import { Link } from "react-router-dom";
import logo from '../../assests/logo192.png';

const Header = ({ isAuth, credentials, setMenu, showMenu, toggleLoginStatus }) => {


    return (
        <header className={styles.header}>
            <Link className={styles.siteBranding} to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <div className={styles.rightHeader}>
                <Navigation isAuth={isAuth} />
                {isAuth && <p className={styles.loggedInAs}>hi <span className="color-orange">{credentials.username}</span></p>}
                <button className={styles.mobileMenuBtn} onClick={() => setMenu(!showMenu)}>
                    {showMenu ? 'close' : 'menu'}
                </button>
                <div className={styles.loginBtns}>
                    <button onClick={toggleLoginStatus}>{isAuth ? 'logout' : 'login  with github'}</button>
                </div>
            </div>

        </header>
    )
}

export default Header;