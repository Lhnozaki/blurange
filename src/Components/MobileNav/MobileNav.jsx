import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileNav.module.scss';
import { useSpring, animated } from 'react-spring';


const MobileNav = ({ isAuth, showMenu, toggleLoginStatus }) => {
    const slided = useRef();

    useEffect(() => {

        if (!showMenu) {
            slided.current = true;
            document.body.style.overflow = 'initial';
        } else {
            document.body.style.overflow = 'hidden'
        }


    }, [showMenu]);


    const slideIn = useSpring({
        transform: showMenu ? 'translateY(0)' : 'translateY(-100%)'
    })

    return (
        <animated.nav className={styles.navigation} style={slideIn}>
            <Link to="/">home</Link>
            <Link to="/editor/templates">editor</Link>
            <div className={styles.loginBtns}>
                <button onClick={toggleLoginStatus}>{isAuth ? 'logout' : 'login'}</button>
                {!isAuth && <button className="alt-btn">sign up</button>}
            </div>
        </animated.nav>
    )
}

export default MobileNav;