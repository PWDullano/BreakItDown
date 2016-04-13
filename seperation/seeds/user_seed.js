
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      id: 1,
      email: 'Patrick W. Dullano',
      password: '123',
      fb_id: 'JDoe',
      nickname: 'BBoy Dullano'})

  );
};
