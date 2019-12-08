const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

router.get(
  "/github",
  passport.authenticate("github", { scope: ["repo"] }),
  (req, res) => {}
);

router.get("/github/callback", passport.authenticate("github"), (req, res) => {
  // Successful authentication, redirect home.
  res.redirect(`${process.env.GITHUB_REDIRECT_LINK}`);
});

module.exports = router;
