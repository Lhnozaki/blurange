const router = require("express").Router();

router.get("/github", (req, res) => {
  res.send("Logging in with github");
});

module.exports = router;
