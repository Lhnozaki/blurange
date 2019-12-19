const router = require("express").Router();
const passport = require("passport");
const User = require("../../../../database/models/User");

require("dotenv").config();

router.get("/", passport.authenticate("github", { scope: ["repo"] }));

router.get("/callback", passport.authenticate("github"), (req, res) => {
  // Successful authentication, redirect home.
  res.redirect(`${process.env.GITHUB_REDIRECT_LINK}`);
});

router.get("/account", (req, res) => {
  const user = req.session.passport.user.username;
  res.json({ user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(`${process.env.GITHUB_REDIRECT_LINK}`);
});

module.exports = router;
