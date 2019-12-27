import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./EditorInfo.module.scss";
import TextInput from "../../Inputs/TextInput";
import TextareaInput from "../../Inputs/TextareaInput";
import ImageUpload from '../../Inputs/ImageUpload';
import { Link } from "react-router-dom";

import {
  authenticateLinkedin,
  getGithubAccount,
  AddImage,
  UploadImage
} from "../../../actions";

const EditorInfo = ({
  currentVal,
  githubAccount,
  state,
  ...props
}) => {
  const [userInfo, setUserInfo] = useState({});

  function handleChange(e, setVal) {
    let { name, value } = e.target
    setVal(value)
    setUserInfo({ ...userInfo, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("user info", userInfo);
  }

  function linkedinLogin(e) {
    e.preventDefault();
    console.log(props.authenticateLinkedin());
    window.location = "/api/auth/linkedin";
  }

  function handleUpload(e) {
    let { name, value } = e.target

    const formData = new FormData();
    formData.append("profileImage", e.target.files[0]);
    props.UploadImage(formData);
    setUserInfo({ ...userInfo, [name]: value });
  }

  function handleClick(e) {
    e.preventDefault();
    this.props.AddImage(this.state).then((img) => {
      if (img) {
        console.log("IMAGE", img);
        let imgData = {
          image_id: img.id,
          url: img.data.location
        };
        this.props.AddImage(imgData);
      }
    });
  }

  useEffect(() => {
    if (state) {
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
          <ImageUpload title="profile image" name="profileImage" handleUpload={handleUpload} />
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
            <Link to="/editor/payments">
              continue
            </Link>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorInfo);
