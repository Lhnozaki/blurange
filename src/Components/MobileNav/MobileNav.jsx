import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./MobileNav.module.scss";
import { useSpring, animated } from "react-spring";
import LoginModal from "../LoginModal";
import LogoutModal from "../LogoutModal";

const MobileNav = ({ isAuth, setAuth, showMenu, toggleLoginStatus }) => {
  const slided = useRef();

  useEffect(() => {
    if (!showMenu) {
      slided.current = true;
      document.body.style.overflow = "initial";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [showMenu]);

  const slideIn = useSpring({
    transform: showMenu ? "translateY(0)" : "translateY(-100%)"
  });

  return (
    <animated.nav className={styles.navigation} style={slideIn}>
      <Link to="/">home</Link>
      <Link to="/editor/templates">editor</Link>
      <div className={styles.loginBtns}>
        <div onClick={toggleLoginStatus}>
          {isAuth ? (
            <LogoutModal isAuth={isAuth} setAuth={setAuth} />
          ) : (
            <LoginModal isAuth={isAuth} setAuth={setAuth} />
          )}
        </div>
      </div>
    </animated.nav>
  );
};

export default MobileNav;
