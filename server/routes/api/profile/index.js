const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("profile posted");
});

module.exports = router;
