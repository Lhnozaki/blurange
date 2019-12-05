import Axios from "axios";

export const GITHUB_AUTH = "GITHUB_AUTH";

export const authenticateGitHub = () => async dispatch => {
  await Axios.get("/api/auth/github")
    .then(githubInfo => {
      dispatch({
        type: GITHUB_AUTH,
        payload: githubInfo
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
