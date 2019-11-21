import React from 'react'
import styles from './Header.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className="sitebranding">blurange</div>
            <div className="navigation">
                <button>login</button>
                <button>sign up</button>
            </div>
        </header>
    )
}

export default Header;