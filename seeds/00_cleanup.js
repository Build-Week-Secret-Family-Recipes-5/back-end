exports.seed = async function(knex) {
    if (process.env.NODE_ENV != "production") {
      await knex("users").truncate();
      await knex("recipes").truncate();
    }
  };