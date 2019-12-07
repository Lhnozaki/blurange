const router = require("express").Router();
const passport = require("passport");

router.get(
  "/github",
  passport.authenticate("github", { scope: ["repo"] }),
  (req, res) => {}
);

router.get("/github/callback", passport.authenticate("github"), (req, res) => {
  // Successful authentication, redirect home.
  res.redirect("http://localhost:3000");
});

module.exports = router;
