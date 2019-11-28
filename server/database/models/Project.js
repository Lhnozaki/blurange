const bookshelf = require("../bookshelf");
require("../models/User");

class Project extends bookshelf.Model {
  get tableName() {
    return "projects";
  }

  user() {
    return this.hasOne("User", "id", "user_id");
  }
}

module.exports = bookshelf.model("Project", Project);
