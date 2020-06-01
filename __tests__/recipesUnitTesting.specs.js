const db = require("../database/config")
const recipes = require("../recipes-router/recipesDataModel")

afterAll(async () => {
    await db.destroy()
});


describe("Testing the recipesDataModel.js", () => {
    beforeEach(async () => {
        await db("recipes").truncate();

    });
    test("get the recipes", async () => {
        await recipes.getRecipes({
            "id": 1,
            "title": "Beet Hummus",
            "ingredients": "2, 15 oz. cans of chickpeas / 1, 15 oz. can cut or whole beets, drained (about 8.5 oz) / ½ Cup fresh lemon juice (about 2 ½ lemons) / 2 small garlic cloves, minced / 3 Tbsp. tahini paste / Salt, to taste / Olive oil, to drizzle / Cumin, to garnish",
            "instructions": "1 - Strain one can of chickpeas and set aside. 2 - Combine half of the first can of drained chickpeas with the whole second can, and warm in their liquid in a small saucepan. Once they come to a gentle simmer, strain out the chickpea juice and blend in a food processor while still warm into a fine purée. 3 - Add in the beets and continue to blend until smooth. 4 - Next, add the tahini, followed by the garlic, lemon juice, and salt. Pulse again until combined. Taste and season with more salt if needed. 5 - Serve garnished with the rest of the chickpeas, a drizzle of olive oil, and a sprinkle of cumin if desired.",
            "source": "fruitsandveggies.org",
            "category": "Veggies",
            "photo": "https://fruitsandveggies.org/wp-content/uploads/2018/12/beet-hummus-thumb-800x267.jpg"
        })
    })
    test("get a specific recipe", async () => {
        await recipes.getRecipeById({
            "title": "Beet Hummus",
            "ingredients": "2, 15 oz. cans of chickpeas / 1, 15 oz. can cut or whole beets, drained (about 8.5 oz) / ½ Cup fresh lemon juice (about 2 ½ lemons) / 2 small garlic cloves, minced / 3 Tbsp. tahini paste / Salt, to taste / Olive oil, to drizzle / Cumin, to garnish",
            "instructions": "1 - Strain one can of chickpeas and set aside. 2 - Combine half of the first can of drained chickpeas with the whole second can, and warm in their liquid in a small saucepan. Once they come to a gentle simmer, strain out the chickpea juice and blend in a food processor while still warm into a fine purée. 3 - Add in the beets and continue to blend until smooth. 4 - Next, add the tahini, followed by the garlic, lemon juice, and salt. Pulse again until combined. Taste and season with more salt if needed. 5 - Serve garnished with the rest of the chickpeas, a drizzle of olive oil, and a sprinkle of cumin if desired.",
            "source": "fruitsandveggies.org",
            "category": "Veggies",
            "photo": "https://fruitsandveggies.org/wp-content/uploads/2018/12/beet-hummus-thumb-800x267.jpg"
        })
    })
    test("add a recipe", async () => {
        await recipes.addRecipe({
            "title": "Beet Hummus",
            "ingredients": "2, 15 oz. cans of chickpeas / 1, 15 oz. can cut or whole beets, drained (about 8.5 oz) / ½ Cup fresh lemon juice (about 2 ½ lemons) / 2 small garlic cloves, minced / 3 Tbsp. tahini paste / Salt, to taste / Olive oil, to drizzle / Cumin, to garnish",
            "instructions": "1 - Strain one can of chickpeas and set aside. 2 - Combine half of the first can of drained chickpeas with the whole second can, and warm in their liquid in a small saucepan. Once they come to a gentle simmer, strain out the chickpea juice and blend in a food processor while still warm into a fine purée. 3 - Add in the beets and continue to blend until smooth. 4 - Next, add the tahini, followed by the garlic, lemon juice, and salt. Pulse again until combined. Taste and season with more salt if needed. 5 - Serve garnished with the rest of the chickpeas, a drizzle of olive oil, and a sprinkle of cumin if desired.",
            "source": "fruitsandveggies.org",
            "category": "Veggies",
            "photo": "https://fruitsandveggies.org/wp-content/uploads/2018/12/beet-hummus-thumb-800x267.jpg"
        })
    })
})
