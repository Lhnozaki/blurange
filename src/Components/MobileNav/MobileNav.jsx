import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileNav.module.scss';
import { useSpring, animated } from 'react-spring'

const MobileNav = ({ isAuth, showMenu }) => {
    const slideIn = useSpring({
        transform: showMenu ? 'translateY(0)' : 'translateY(-100%)'
    })

    return (
        <animated.nav className={styles.navigation} style={slideIn}>
            <Link to="/">home</Link>
            {isAuth && <Link to="/editor">editor</Link>}
            {isAuth && <Link to="/dashboard">dashboard</Link>}
        </animated.nav>
    )
}

export default MobileNav;