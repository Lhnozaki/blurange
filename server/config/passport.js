const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const User = require("../database/models/User");

require("dotenv").config();

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

const callback = (accessToken, refreshToken, profile, cb) => {
  user = { ...profile, accessToken };
  return cb(null, profile);
};

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.REACT_APP_GITHUB_CLIENT_ID,
      clientSecret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      const github = profile.username;
      const name = profile.displayName;
      const password = accessToken;
      const location = profile._json.location;
      console.log(profile);
      new User({ github, name, password, location }).save().then(() => {
        console.log("New user created");
      });
      return cb(null, profile);
    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.REACT_APP_LINKEDIN_KEY,
      clientSecret: process.env.REACT_APP_LINKEDIN_SECRET,
      callbackURL: "/api/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile", "w_member_social"]
    },
    callback
  )
);
