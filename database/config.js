const knex = require("knex")
const knexfile = require("../knexfile")

module.exports = knex(knexfile.development)
// [process.env.NODE_ENV]