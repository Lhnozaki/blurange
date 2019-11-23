exports.up = function(knex) {
  return knex.schema.createTable('skills', table => {
    table.increments();
    table.string('name').notNullable();
    table
      .integer('user_id')
      .unsigned()
      .references('users.id')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('skills');
};
