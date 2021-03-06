const bookshelf = require("../bookshelf");
require("../models/User");

class Edu extends bookshelf.Model {
  get tableName() {
    return "edu";
  }

  user() {
    return this.hasOne("User", "id", "user_id");
  }
}

module.exports = bookshelf.model("Edu", Edu);
