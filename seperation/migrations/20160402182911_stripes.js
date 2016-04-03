exports.up = function(knex, Promise) {
  return knex.schema.createTable('stripes', function(table){
    table.increments();
    table.string('title');
    table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stripes');
};
