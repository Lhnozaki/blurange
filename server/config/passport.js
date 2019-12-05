const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

require("dotenv").config();

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

const callback = (accessToken, refreshToken, profile, cb) => {
  console.log(JSON.stringify(profile));
  user = { ...profile };
  return cb(null, profile);
};

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback"
    },
    callback
  )
);
