
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vegges').del()
    .truncate() // empties the table and resets primary key
    .then(function () {
      // Inserts seed entries
      return knex('vegges').insert([
        {name: "broccoli", like_it: 1},
        {name: "srpouts", like_it: 0},
        {name: "cabbage", like_it: 1}
      ]);
    });
};
