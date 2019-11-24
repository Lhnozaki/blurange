const router = require("express").Router();

router.get("/linkedin", (req, res) => {
  res.send("Logging in with linkedin");
});

module.exports = router;
