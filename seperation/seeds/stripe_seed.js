
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('stripes').del(),

    // Inserts seed entries
    knex('stripes').insert({
      id: 1,
      title: 'Stylistic',
      description: "Gettin' funky, hit the lab 10 times working on your style!"})
  );
};
