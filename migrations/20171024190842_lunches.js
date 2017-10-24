
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('lunches', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('ingredients')
    table.string('image')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lunches')
}