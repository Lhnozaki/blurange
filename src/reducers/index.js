import { GITHUB_AUTH, GITHUB_ACCOUNT, LINKEDIN_AUTH } from "../actions";

const initialState = { profileData: {}, githubAccount: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LINKEDIN_AUTH:
      return Object.assign({}, state, { profileData: action.payload });
    case GITHUB_ACCOUNT:
      return Object.assign({}, state, { githubAccount: action.payload });
  }
};

export default reducer;
