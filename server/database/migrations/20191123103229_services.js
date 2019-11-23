exports.up = function(knex) {
  return knex.schema.createTable('services', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('description');
    table
      .integer('user_id')
      .unsigned()
      .references('users.id')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('services');
};
