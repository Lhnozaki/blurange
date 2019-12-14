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
      const password = accessToken;
      const location = profile._json.location;
      console.log(github, name, password, location);
      return new User({ github: github })
        .fetch({ require: false })
        .then(data => {
          if (data === null) {
            console.log("User created");
            return new User({ github, name, password, location })
              .save()
              .then(data => {
                console.log("github data: ", data);
                return cb(null, profile);
              })
              .catch(err => {
                console.log("User wasnt created: ", err);
              });
          } else {
            console.log("User exists");
            return cb(null, profile);
          }
        })
        .catch(err => {
          console.log("Error getting user: ", err);
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
      scope: ["r_emailaddress", "r_basicprofile"],
      state: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      console.log("Linkedin works");
      process.nextTick(() => {
        console.log("To be put into database: ");
        //record in database
        return done(null, profile);
      });
    }
  )
);
