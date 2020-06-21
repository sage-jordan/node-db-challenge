
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 150).notNullable();
        tbl.string('notes');
        tbl.integer('project_id').references('id').inTable('projects').notNullable();
        tbl.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};
