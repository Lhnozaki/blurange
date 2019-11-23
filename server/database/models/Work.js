const bookshelf = require("../bookshelf");
require("../models/User");

class Work extends bookshelf.Model {
  get tableName() {
    return "work";
  }

  user() {
    return this.hasOne("User", "id", "user_id");
  }
}

module.exports = bookshelf.model("Work", Work);
