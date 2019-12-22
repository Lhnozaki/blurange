import { GITHUB_AUTH, GITHUB_ACCOUNT, LINKEDIN_AUTH, UPLOAD_IMAGE, ADD_IMAGE } from "../actions";

const initialState = {
  profileData: {},
  githubAccount: {},
  imageURL: {},
  images: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LINKEDIN_AUTH:
      return Object.assign({}, state, { profileData: action.payload });
    case GITHUB_ACCOUNT:
      return Object.assign({}, state, { githubAccount: action.payload });
    case UPLOAD_IMAGE:
      return Object.assign({}, state, { imageURL: action.payload });
    case ADD_IMAGE:
      return Object.assign({}, state, { images: [...action.payload] });
  }
};

export default reducer;
