const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const User = require("../database/models/User");

require("dotenv").config();

passport.serializeUser((data, cb) => {
  cb(null, { username: data });
});

passport.deserializeUser((data, cb) => {
  cb(null, data);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.REACT_APP_GITHUB_CLIENT_ID,
      clientSecret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      callbackURL: `${process.env.GITHUB_REDIRECT_LINK}/api/auth/github/callback`
    },
    (accessToken, refreshToken, profile, cb) => {
      const github = profile.username;
      const name = profile.displayName;
      const token = accessToken;
      const location = profile._json.location;
      return new User({ github: github })
        .fetch({ require: false })
        .then(data => {
          if (data === null) {
            return new User({ github, name, token, location })
              .save()
              .then(data => {
                // user created
                return cb(null, data.github);
              })
              .catch(err => {
                res.send(err);
              });
          } else {
            // user exists
            data = data.toJSON();
            return cb(null, data.github);
          }
        })
        .catch(err => {
          res.send(err);
        });
    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.REACT_APP_LINKEDIN_KEY,
      clientSecret: process.env.REACT_APP_LINKEDIN_SECRET,
      callbackURL: `${process.env.LINKEDIN_REDIRECT_LINK}/api/auth/linkedin/callback`,
      scope: ["r_basicprofile"],
      state: true
    },
    (accessToken, refreshToken, profile, done) => {
      // linkedin works
      process.nextTick(() => {
        //record in database
        return done(null, profile);
      });
    }
  )
);
