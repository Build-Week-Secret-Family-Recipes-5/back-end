const db = require("../database/config")

module.exports = {
    getRecipes,
    getRecipeById,
    addRecipe,
    updateRecipe,
    deleteRecipe
}

function getRecipes() {
    return db("recipes").select("*")
}

function getRecipeById(id) {
    return db("recipes")
    .where({ id })
    .first()
}

async function addRecipe(user) {
    const [ id ] = await db("recipes").insert(user, "id").returning("*")

    return getRecipeById(id)
}

function updateRecipe(id, recipe) {
    return db("recipes")
    .where("id", Number (id))
    .update(recipe)
}

function deleteRecipe(id) {
    return db("recipes")
    .where("id", Number (id))
    .del()
}