import {
  GITHUB_AUTH,
  GITHUB_ACCOUNT,
  LINKEDIN_AUTH,
  UPLOAD_IMAGE,
  ADD_IMAGE,
  ADD_PROFILE
} from "../actions";

const initialState = {
  profileData: {},
  githubAccount: {},
  imageURL: {},
  images: []
};

export let obj, img;

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
    case ADD_PROFILE:
      obj = action.payload;
      return Object.assign({}, state, {
        creatures: [...action.payload]
      });
  }
};

export default reducer;
