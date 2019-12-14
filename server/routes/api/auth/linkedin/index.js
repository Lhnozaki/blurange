const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

router.get("/linkedin", passport.authenticate("linkedin"), (req, res) => {});

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", (req, res) => {
    res.redirect("http://localhost:8080");
  })
);

module.exports = router;
