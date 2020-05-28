
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
      table.increments("id")
      table.string("title").notNull()
      table.string("ingredients", 500).notNull()
      table.string("instructions", 500).notNull()
      table.string("source").notNull()
      table.string("category").notNull()
      table.string("photo", 500).notNull
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes")
};
