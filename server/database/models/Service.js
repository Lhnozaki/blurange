const bookshelf = require('../bookshelf');
require('../models/User');

class Service extends bookshelf.Model {
  get tableName() {
    return 'services';
  }

  user() {
    return this.hasOne('User');
  }
}

module.exports = bookshelf.model('Service', Service);
