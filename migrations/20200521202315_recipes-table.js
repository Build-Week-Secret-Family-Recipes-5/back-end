
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
      table.increments("id")
      table.string("title").notNull()
      table.string("instructions").notNull()
      table.string("ingredients").notNull()
      table.string("photo").notNull
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes")
};
