const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

router.get("/linkedin", passport.authenticate("linkedin"));

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "http://localhost:3000/editor",
    failureRedirect: "http://localhost:3000/editor"
  })
);

module.exports = router;
