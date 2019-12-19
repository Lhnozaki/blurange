const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

router.get("/", passport.authenticate("linkedin"));

router.get(
  "/callback",
  passport.authenticate("linkedin", {
    successRedirect: "http://localhost:3000/editor",
    failureRedirect: "http://localhost:3000/editor"
  })
);

module.exports = router;
