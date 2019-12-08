const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

router.get(
  "/linkedin",
  passport.authenticate("linkedin", { state: "profile" }),
  (req, res) => {}
);

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: `${process.env.LINKEDIN_REDIRECT_URL}`
  })
);

module.exports = router;
