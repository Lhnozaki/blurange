import { GITHUB_AUTH } from "../actions";

const initialState = { githubURL: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GITHUB_AUTH:
      return Object.assign({}, state, { githubURL: action.payload });
  }
};

export default reducer;
