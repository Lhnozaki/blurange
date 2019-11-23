const express = require("express");
const decorator = require("./database/decorator");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const bcrypt = require("bcryptjs");
const knex = require("./database/knex");
const flash = require("connect-flash");
const saltRounds = 12;

const githubAuth = require("./routes/auth-routes/github");

///// DOTENV & PASSPORT /////
require("dotenv").config();
require("./config/passport")(passport);

///// REDIS /////
const RedisStore = require("connect-redis")(session);
const redis = require("redis");
const client = redis.createClient({ url: process.env.REDIS_URL });

///// PORT /////
const PORT = process.env.EXPRESS_HOST_PORT;

///// APP /////
const app = express();

///// MIDDLEWARE /////
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(decorator);

///// ROUTES /////
app.use("/auth", githubAuth);

///// LISTEN /////
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
