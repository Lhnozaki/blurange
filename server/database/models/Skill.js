const bookshelf = require('../bookshelf');
require('../models/User');

class Skill extends bookshelf.Model {
  get tableName() {
    return 'skills';
  }

  user() {
    return this.hasOne('User');
  }
}

module.exports = bookshelf.model('Skill', Skill);
