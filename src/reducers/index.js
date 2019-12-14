import { GITHUB_AUTH, LINKEDIN_AUTH } from "../actions";

const initialState = { githubURL: {}, profileData: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GITHUB_AUTH:
      return Object.assign({}, state, { githubURL: action.payload });
    case LINKEDIN_AUTH:
      return Object.assign({}, state, { profileData: action.payload });
  }
};

export default reducer;
