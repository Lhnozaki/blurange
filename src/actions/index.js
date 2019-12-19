import Axios from "axios";
import { browserHistory } from "react-router";

export const GITHUB_AUTH = "GITHUB_AUTH";
export const LINKEDIN_AUTH = "LINKEDIN_AUTH";
export const GITHUB_ACCOUNT = "GITHUB_ACCOUNT";

export const authenticateGitHub = () => async dispatch => {
  await Axios.get("/api/auth/github").catch(err => {
    console.log(err.message);
  });
};

export const getGithubAccount = () => async dispatch => {
  await Axios.get("/api/auth/github/account").then(data => {
    console.log(data);
    dispatch({
      type: GITHUB_ACCOUNT,
      payload: data.data.user
    });
  });
};

export const authenticateLinkedin = () => async dispatch => {
  await Axios.get("/api/auth/linkedin")
    .then(linkedinData => {
      console.log(linkedinData);
      dispatch({
        type: LINKEDIN_AUTH,
        payload: linkedinData
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
