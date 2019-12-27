import React, { useEffect, setState } from "react";
import { connect } from "react-redux";
import styles from "./Header.module.scss";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import logo from "../../assests/logo192.png";
import LoginModal from "../LoginModal";
import LogoutModal from "../LogoutModal";

import { getGithubAccount, authenticateGitHub } from "../../actions";

const Header = ({ isAuth, setAuth, setMenu, showMenu, state, ...props }) => {
  useEffect(() => {
    if (props) {
      if (props.githubAccount) {
        if (typeof props.githubAccount.githubAccount === "string") {
          setAuth(true);
        } else {
          setAuth(false);
        }
      }
    }
  }, [props]);

  return (
    <header className={styles.header}>
      <Link className={styles.siteBranding} to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.rightHeader}>
        <Navigation isAuth={isAuth} />
        {isAuth && (
          <span className={styles.loggedInAs}>
            Welcome, &nbsp;
            <a
              target="_blank"
              href={`https://github.com/${props.githubAccount.githubAccount}`}
            >
              {props.githubAccount.githubAccount}
            </a>
          </span>
        )}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMenu(!showMenu)}
        >
          {showMenu ? "close" : "menu"}
        </button>
        <div className={styles.loginBtns}>
          {isAuth ? (
            <LogoutModal isAuth={isAuth} setAuth={setAuth} />
          ) : (
            <LoginModal
              className={styles.github}
              isAuth={isAuth}
              setAuth={setAuth}
            />
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return { githubAccount: state };
};

export default connect(
  mapStateToProps,
  null
)(Header);
