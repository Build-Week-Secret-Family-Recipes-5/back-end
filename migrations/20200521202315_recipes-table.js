
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
      table.increments("id")
      table.text("title").notNull()
      table.text("ingredients").notNull()
      table.text("instructions").notNull()
      table.text("source").notNull()
      table.text("category").notNull()
      table.text("photo").notNull
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes")
};
