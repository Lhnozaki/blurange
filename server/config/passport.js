const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

require("dotenv").config();

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log(JSON.stringify(profile));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);
