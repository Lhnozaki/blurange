import Axios from "axios";

export const GITHUB_AUTH = "GITHUB_AUTH";

export const authenticateGitHub = () => async dispatch => {
  await Axios.get("/api/auth/github")
    .then(githubData => {
      console.log("authenticate github action");
      console.log(githubData.data);
      dispatch({
        type: GITHUB_AUTH,
        payload: githubData.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
