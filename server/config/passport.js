const LocalStrategy = require("passport-local").Strategy;
const knex = require("../database/knex");
const bcrypt = require("bcryptjs");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy(function(username, password, done) {
      return new User({ username: username })
        .fetch()
        .then(user => {
          if (user === null) {
            return done(null, false, { message: "bad username or password" });
          } else {
            user = user.toJSON();

            bcrypt.compare(password, user.password).then(res => {
              // Happy route: username exists, password matches
              if (res) {
                return done(null, user); // this is the user that goes to serialize
              }
              // Error Route: Username exists, password does not match
              else {
                return done(null, false, {
                  message: "bad username or password"
                });
              }
            });
          }
        })
        .catch(err => {
          return done(err);
        });
    })
  );

  passport.serializeUser(function(user, done) {
    return done(null, { id: user.id, username: user.username });
  });

  passport.deserializeUser(function(user, done) {
    return done(null, user);
  });
};
