// describes what will be done
exports.up = function(knex) {
  // always return the call to knex.schema
  return knex.schema.createTable('veggies', tbl => {
    // primary key, called id, an integer, autoincrement
    tbl.increments();

    // unique() is a constraint - rules we define to protect against invalid data
    tbl.string('name', 128)
      .notNullable()
      .unique()
      .index(); // makes searching for veggies using this column faster

    tbl.boolean('like_it').defaultTo(false);
  })
};

// describes how to revert changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('veggies');
};
