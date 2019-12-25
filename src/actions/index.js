import Axios from "axios";
import { browserHistory } from "react-router";

export const GITHUB_AUTH = "GITHUB_AUTH";
export const LINKEDIN_AUTH = "LINKEDIN_AUTH";
export const GITHUB_ACCOUNT = "GITHUB_ACCOUNT";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const ADD_IMAGE = "ADD_IMAGE";
export const ADD_PROFILE = "ADD_PROFILE";
export const LOGOUT_GITHUB = "LOGOUT_GITHUB";

export const authenticateGitHub = () => async dispatch => {
  await Axios.get("/api/auth/github").catch(err => {
    console.log(err.message);
  });
};

export const logoutGithub = () => async dispatch => {
  await Axios.get("/api/auth/github/logout").catch(err => {
    console.log(err.message);
  });
};

export const getGithubAccount = () => async dispatch => {
  await Axios.get("/api/auth/github/account").then(data => {
    dispatch({
      type: GITHUB_ACCOUNT,
      payload: data.data.user
    });
  });
};

export const authenticateLinkedin = () => async dispatch => {
  await Axios.get("/api/auth/linkedin")
    .then(linkedinData => {
      dispatch({
        type: LINKEDIN_AUTH,
        payload: linkedinData
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const UploadImage = data => async dispatch => {
  await Axios.post("/api/images/upload", data)
    .then(img => {
      dispatch({
        type: UPLOAD_IMAGE,
        payload: img
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const AddImage = data => async dispatch => {
  await Axios.post("/api/images/", data)
    .then(img => {
      dispatch({
        type: ADD_IMAGE,
        payload: img
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const AddProfile = data => async dispatch => {
  await Axios.post("/api/profile", data)
    .then(data => {
      dispatch({
        type: ADD_PROFILE,
        payload: data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
