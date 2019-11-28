const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("Login using...");
});

router.get("/logout", (req, res) => {
  res.send("logging out");
});

module.exports = router;
