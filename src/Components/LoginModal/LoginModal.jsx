import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./LoginModal.module.scss";

import { authenticateGitHub } from "../../actions";

const LoginModal = ({
  setLoginOn,
  isAuth,
  setAuth,
  credentials,
  setCredentials,
  ...props
}) => {
  function handleSubmit(event) {
    const url =
      "https://github.com/login/oauth/authorize?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fauth%2Fgithub%2Fcallback&scope=repo&client_id=f58bc8b0116e9bac9dd2";
    const width = 600,
      height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    event.preventDefault();
    // props.authenticateGitHub;
    window.open(
      url,
      `toolbar=no, location=no, directories=no, status=no, menubar=no,
      scrollbars=no, resizable=no, copyhistory=no, width=${width},
      height=${height}, top=${top}, left=${left}`
    );
    setAuth(true);
    setLoginOn(false);
  }

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <div className={styles.loginOverlay}>
      <div className={styles.loginModal}>
        <button className={styles.github} onClick={e => handleSubmit(e)}>
          <span>
            <svg
              height="32"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </span>
          Login with Github
        </button>
        <button className="alt-btn" onClick={() => setLoginOn(false)}>
          go back
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    authenticateGitHub: () => {
      return dispatch(authenticateGitHub());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginModal);
