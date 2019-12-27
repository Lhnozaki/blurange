import React, { useEffect, setState } from "react";
import { connect } from "react-redux";
import styles from "./Header.module.scss";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import logo from "../../assests/logo192.png";
import LoginModal from "../LoginModal";

import { getGithubAccount, authenticateGitHub } from "../../actions";

const Header = ({
  isAuth,
  setAuth,
  setLoginOn,
  setMenu,
  showMenu,
  state,
  ...props
}) => {
  useEffect(() => {
    console.log(state);
    // if (state) {
    //   if (state.githubAccount && typeof state.githubAccount === "string") {
    //     setAuth(true);
    //   }
    // }
  }, []);

  return (
    <header className={styles.header}>
      <Link className={styles.siteBranding} to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.rightHeader}>
        <Navigation isAuth={isAuth} />
        {isAuth && (
          <p className={styles.loggedInAs}>{isAuth && `Welcome, hi`}</p>
        )}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMenu(!showMenu)}
        >
          {showMenu ? "close" : "menu"}
        </button>
        <div className={styles.loginBtns}>
          {isAuth ? (
            "Logout"
          ) : (
            <LoginModal
              className={styles.github}
              isAuth={isAuth}
              setLoginOn={setLoginOn}
              setAuth={setAuth}
            />
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return { state: state };
};

export default connect(
  mapStateToProps,
  null
)(Header);
