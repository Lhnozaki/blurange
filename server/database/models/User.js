const bookshelf = require('../bookshelf');
require('../models/Edu');
require('../models/Skill');
require('../models/Work');
require('../models/Project');
require('../models/Interest');

class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }

  edu() {
    return this.hasMany('Edu');
  }

  skills() {
    return this.hasMany('Skill');
  }

  work() {
    return this.hasMany('Work');
  }

  projects() {
    return this.hasMany('Project');
  }

  interests() {
    return this.hasMany('Interest');
  }
}

module.exports = bookshelf.model('User', User);
