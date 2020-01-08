
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'nicole', email: 'nicole@email.com', password: '1234', role: 'admin' },
     
      ]);
    });
};
