exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("github")
      .notNullable()
      .unique();
    table.string("name", 25).notNullable();
    table.string("token").notNullable();
    table.string("linkedin");
    table.string("location");
    table.string("job_title");
    table.string("about");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
