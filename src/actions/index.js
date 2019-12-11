import Axios from "axios";
import { browserHistory } from "react-router";
export const GITHUB_AUTH = "GITHUB_AUTH";

export const authenticateGitHub = () => async dispatch => {
  await Axios.get("/api/auth/github")
    .then(githubData => {
      dispatch({
        type: GITHUB_AUTH,
        payload: githubData.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
