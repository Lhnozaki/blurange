import React from 'react'
import styles from './Header.module.scss'
const Header = ({ isAuth, setAuth }) => {
    return (
        <header className={styles.header}>
            <div className={styles.siteBranding}>blurange</div>
            <div className={styles.navigation}>
                <button onClick={() => setAuth(!isAuth)}>{isAuth ? 'logout' : 'login'}</button>
                <button className="alt-btn">sign up</button>
            </div>
        </header>
    )
}

export default Header;