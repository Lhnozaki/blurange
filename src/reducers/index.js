import { GITHUB_AUTH } from "../actions";

const initialState = { users: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GITHUB_AUTH:
      return Object.assign({}, state, { users: action.payload });
  }
};

export default reducer;
