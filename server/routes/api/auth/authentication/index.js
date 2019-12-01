const router = require("express").Router();

router.get("/login", (req, res) => {
  console.log("login route");
  res.send("Login using...");
});

router.get("/logout", (req, res) => {
  res.send("logging out");
});

module.exports = router;
