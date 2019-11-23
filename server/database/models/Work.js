const bookshelf = require('../bookshelf');
require('../models/User');

class Work extends bookshelf.Model {
  get tableName() {
    return 'work';
  }

  user() {
    return this.hasOne('User');
  }
}

module.exports = bookshelf.model('Work', Work);
