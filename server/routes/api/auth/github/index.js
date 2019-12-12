const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

router.get("/github", passport.authenticate("github", { scope: ["repo"] }));

router.get("/github/callback", passport.authenticate("github"), (req, res) => {
  // Successful authentication, redirect home.
  res.redirect("https://nocan.design");
});

module.exports = router;
