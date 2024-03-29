///// DOTENV  /////
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const decorator = require("./database/decorator");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const bcrypt = require("bcryptjs");
const knex = require("./database/knex");
const flash = require("connect-flash");

///// ROUTING /////
const githubAuth = require("./routes/api/auth/github");
const linkedinAuth = require("./routes/api/auth/linkedin");
const paymentsRoute = require("./routes/api/payment");
const imagesRoute = require("./routes/api/images");
const profileRoute = require("./routes/api/profile");

///// REDIS /////
const RedisStore = require("connect-redis")(session);
const redis = require("redis");

///// PORT /////
const PORT = process.env.EXPRESS_HOST_PORT;

//Config passport
const passportConfig = require("./config/passport");

///// APP /////
const app = express();

///// MIDDLEWARE /////
app.use(cors());
app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(decorator);
app.use(passport.initialize());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use("/api/auth/github", githubAuth);
app.use("/api/auth/linkedin", linkedinAuth);
app.use("/api/charge", paymentsRoute);
app.use("/api/images", imagesRoute);
app.use("/api/profile", profileRoute);

app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

///// LISTEN /////
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
