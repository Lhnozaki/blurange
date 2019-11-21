const express = require("express");
const bodyparser = require("body-parser");
const decorator = require("./database/decorator");

const PORT = process.env.EXPRESS_HOST_PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
