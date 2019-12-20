import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./EditorInfo.module.scss";
import TextInput from "../../Inputs/TextInput";
import TextareaInput from "../../Inputs/TextareaInput";
import { Link } from "react-router-dom";

import { authenticateLinkedin, getGithubAccount } from "../../../actions";

const EditorInfo = ({
  setEditorStatus,
  handleChange,
  currentVal,
  githubAccount,
  state,
  ...props
}) => {
  const [userInfo, setUserInfo] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setEditorStatus(2);
    console.log("user info", userInfo);
  }

  function linkedinLogin(e) {
    e.preventDefault();
    console.log(props.authenticateLinkedin());
    window.location = "/api/auth/linkedin";
  }

  useEffect(() => {
    console.log(state);
    if (state.githubAccount) {
      fetch(
        `https://api.github.com/users/${state.githubAccount}/repos?per_page=1000`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infoCta}>
        <h3>Fill in info or</h3>
        <button onClick={linkedinLogin}>login with linkedin</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="auto-grid grid-gap-md">
          <TextInput
            type="text"
            title="first"
            name="firstName"
            value={"hello"}
            placeholder="first name"
            handleChange={handleChange}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
          <TextInput
            type="text"
            title="last"
            name="lastName"
            value="yo"
            placeholder="last name"
            handleChange={handleChange}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
          <TextareaInput
            title="about"
            name="about"
            value="tell us about yourself"
            handleChange={handleChange}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </div>
        <div className="editor-button-container">
          <button>
            <Link to="/editor/templates">go back</Link>
          </button>
          <button>
            <Link to="/editor/deploy">continue</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return { state: state };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticateLinkedin: () => {
      return dispatch(authenticateLinkedin());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorInfo);
