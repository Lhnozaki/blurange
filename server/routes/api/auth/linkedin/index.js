const router = require("express").Router();
const passport = require("passport");

router.get(
  "/linkedin",
  passport.authenticate("linkedin", { state: "profile" }),
  (req, res) => {}
);

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "http://localhost:3000/editor/info"
  })
);

module.exports = router;
