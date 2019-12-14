import React from "react";
import styles from "./EditorInfo.module.scss";
import TextInput from "../../Inputs/TextInput";
const EditorInfo = ({
  setEditorStatus,
  handleChange,
  userInfo,
  currentVal,
  setUserInfo
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    setEditorStatus(2);
    console.log("user info", userInfo);
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className="auto-grid grid-gap-md">
          <TextInput
            title="first"
            name="firstName"
            value="hi"
            placeholder="first name"
            handleChange={handleChange}
            setUserInfo={setUserInfo}
          />
          <TextInput
            title="last"
            name="lastName"
            value="yo"
            placeholder="last name"
            handleChange={handleChange}
            setUserInfo={setUserInfo}
          />
          <TextInput
            title="email"
            name="email"
            value="bruh"
            placeholder="last name"
            handleChange={handleChange}
            setUserInfo={setUserInfo}
          />
        </div>
        <button onClick={() => handleSubmit} className={styles.continueBtn}>
          continue
        </button>
      </form>
    </div>
  );
};
export default EditorInfo;
