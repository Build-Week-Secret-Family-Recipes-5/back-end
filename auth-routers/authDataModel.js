const db = require("../database/config")

module.exports = {
    add,
    find,
    findBy,
    findById,
  };
  
  function find() {
    return db("users").select("id", "username");
  }
  
  function findBy(filter) {
    return db("users").where(filter);
  }
  
  async function add(user) {
    const [id] = await db("users").insert(user, "id").returning('*');
  
    return findById(id);
  }
  
  function findById(id) {
    return db("users")
      .where({ id })
      .first();
  }
