exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('url').notNullable();
    table
      .integer('user_id')
      .unsigned()
      .references('users.id')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};
