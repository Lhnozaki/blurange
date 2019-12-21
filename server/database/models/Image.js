const bookshelf = require("../bookshelf");
require("../models/User");

class Image extends bookshelf.Model {
  get tableName() {
    return "images";
  }
  get timestamps() {
    return true;
  }

  creature_id() {
    return this.belongsTo("User", "id", "user_id");
  }
}

module.exports = bookshelf.model("Image", Image);
