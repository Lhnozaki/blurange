exports.up = function(knex) {
  return knex.schema.createTable("images", table => {
    table.increments();
    table.string("url").notNullable();
    table
      .integer("profile_id")
      .unsigned()
      .references("users.id")
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("images");
};
