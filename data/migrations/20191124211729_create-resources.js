
exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description', 150);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
};
