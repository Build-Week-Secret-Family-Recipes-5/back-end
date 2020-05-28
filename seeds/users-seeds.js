
exports.seed = async function(knex) {
    await knex("users").insert([
      {username: "fnumilat", email: "fnu125@gmail.com", password: "fnu154" },
      {username: "jackson20", email: "j20@gmail.com", password: "j20" }
    ])
};
