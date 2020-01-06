
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users2').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users2').insert([
        {first_name: 'nicole', email: 'nicole@email.com', password: '1234'},
        {first_name: 'spencer', email: 'spencer@email.com', password: '1234'},
        {first_name: 'hiter', email: 'hiter@email.com', password: '1234'},
        {first_name: 'coltyn', email: 'coltyn@email.com', password: '1234'},
      ]);
    });
};
