
exports.up = function (knex, Promise) {
    return knex.schema.createTable('journals', tbl => {
        tbl.increments();

        tbl.boolean('chest').defaultTo(false);
        tbl.boolean('back').defaultTo(false);
        tbl.boolean('legs').defaultTo(false);
        tbl.boolean('arms').defaultTo(false);

        // tbl.string('region').notNullable();

        tbl.string('exercise')
            .notNullable();

        tbl.string('notes');

        tbl.integer('weight')
            .notNullable();

        tbl.integer('sets')
            .notNullable();

        tbl.integer('reps')
            .notNullable();

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('journals');

};
