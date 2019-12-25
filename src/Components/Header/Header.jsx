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
  credentials,
  setLoginOn,
  setCredentials,
  setMenu,
  showMenu,
  state,
  ...props
}) => {
  useEffect(() => {
    props.getGithubAccount();
    if (state) {
      if (typeof state.githubAccount === "string") {
        if (!isAuth) {
          setAuth(false);
          setLoginOn(false);
        } else {
          setLoginOn(true);
        }
      }
    }
  }, []);

  return (
    <header className={styles.header}>
      <Link className={styles.siteBranding} to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.rightHeader}>
        <Navigation isAuth={isAuth} />
        {isAuth && (
          <p className={styles.loggedInAs}>
            {isAuth ? `Welcome, ${state.githubAccount}` : ""}
            <span className="color-orange">{credentials.username}</span>
          </p>
        )}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMenu(!showMenu)}
        >
          {showMenu ? "close" : "menu"}
        </button>
        <div className={styles.loginBtns}>
          <button>
            {isAuth ? (
              "logout"
            ) : (
              <LoginModal
                className={styles.github}
                isAuth={isAuth}
                setLoginOn={setLoginOn}
                setAuth={setAuth}
                credentials={credentials}
                setCredentials={setCredentials}
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticateGitHub: () => {
      dispatch(authenticateGitHub());
    },
    getGithubAccount: () => {
      dispatch(getGithubAccount());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
