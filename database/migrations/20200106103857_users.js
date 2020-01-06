
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.primary();
            tbl.string('first_name').notNullable();
            tbl.string('email').notNullable().unique();
            tbl.string('password').notNullable();
        }
        )
};

exports.down = function (knex) {
return knex.schema.dropTableIfEists('users');
};
