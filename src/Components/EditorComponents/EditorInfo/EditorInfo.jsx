import React from "react";
import { connect } from "react-redux";
import styles from "./EditorInfo.module.scss";
import TextInput from "../../Inputs/TextInput";
import TextareaInput from "../../Inputs/TextareaInput";
import { authenticateLinkedin } from "../../../actions";

const EditorInfo = ({
  setEditorStatus,
  handleChange,
  userInfo,
  currentVal,
  setUserInfo,
  ...props
}) => {
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
            value="hi"
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
        <button className={styles.continueBtn}>continue</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    authenticateLinkedin: () => {
      return dispatch(authenticateLinkedin());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditorInfo);
