const bookshelf = require('../bookshelf');
require('../models/User');

class Interest extends bookshelf.Model {
  get tableName() {
    return 'interests';
  }

  user() {
    return this.hasOne('User');
  }
}

module.exports = bookshelf.model('Interest', Interest);
