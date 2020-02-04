import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./EditorInfo.module.scss";
import TextInput from "../../Inputs/TextInput";
import TextareaInput from "../../Inputs/TextareaInput";
import ImageUpload from "../../Inputs/ImageUpload";
import { Link } from "react-router-dom";
import { obj, img } from "../../../reducers/index";

import {
  authenticateLinkedin,
  AddImage,
  UploadImage,
  AddProfile
} from "../../../actions";

const EditorInfo = ({ currentVal, githubAccount, state, ...props }) => {
  const [userInfo, setUserInfo] = useState({});

  let githubRepos;

  function handleChange(e, setVal) {
    let { name, value } = e.target;
    setVal(value);
    setUserInfo({ ...userInfo, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    AddProfile(state).then(() => {
      if (img !== undefined) {
        let imgData = {
          profile_id: obj.id,
          url: img.data.location
        };
        AddImage(imgData);
      }
    });
  }

  function linkedinLogin(e) {
    e.preventDefault();
    window.location = "/api/auth/linkedin";
  }

  function handleUpload(e) {
    let { name, value } = e.target;

    const formData = new FormData();
    formData.append("profileImage", e.target.files[0]);
    UploadImage(formData);
  }

  useEffect(() => {
    if (state) {
      if (state.githubAccount) {
        if (typeof state.githubAccount === "string") {
          fetch(
            `https://api.github.com/users/${state.githubAccount}/repos?per_page=1000`
          )
            .then(res => res.json())
            .then(data => {
              githubRepos = data;
            })
            .catch(err => {
              console.log(err.message);
            });
        }
      }
    }
  }, []);

  return (
    <div id={styles.container} className="container-lg">
      <div className={styles.infoCta}>
        <h2 className="editor-title">Fill in info</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.infoContainer}>
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
          <ImageUpload
            title="profile image"
            name="profileImage"
            handleUpload={handleUpload}
          />
          <TextareaInput
            title="about"
            name="about"
            placeholder="Tell us about yourself."
            handleChange={handleChange}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
          <TextareaInput
            title="skills"
            name="skills"
            placeholder="Software skills go here."
            handleChange={handleChange}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
          <TextareaInput
            title="experience"
            name="experience"
            placeholder="What experience do you have?"
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
            <Link to="/editor/payments">continue</Link>
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
    },
    UploadImage: () => {
      return dispatch(UploadImage());
    },
    AddImage: () => {
      return dispatch(AddImage());
    },
    AddProfile: () => {
      return dispatch(AddProfile());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorInfo);
