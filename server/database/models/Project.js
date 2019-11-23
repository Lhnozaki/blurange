const bookshelf = require('../bookshelf');
require('../models/User');

class Project extends bookshelf.Model {
  get tableName() {
    return 'projects';
  }

  user() {
    return this.hasOne('User');
  }
}

module.exports = bookshelf.model('Project', Project);
