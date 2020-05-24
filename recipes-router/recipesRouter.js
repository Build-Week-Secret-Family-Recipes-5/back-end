const router = require("express").Router()
const db = require("./recipesDataModel")


router.get("/", (req, res) => {
    db.getRecipes()
    .then(recipes => {
        res.json(recipes)
    }).catch(err => {
        res.status(500).json({ message: "Failed to get the recipes" });
    })
})

router.get("/:id", (req, res) => {
    db.getRecipeById(req.params.id)
    .then(recipe => {
        res.json(recipe)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get the recipe" });
    })
})

router.post("/", (req, res) => {
    if(!req.body.title || !req.body.instructions || !req.body.ingredients || !req.body.photo) {
        return res.status(400).json({ errorMessage: "Please provide title, instructions, ingredients and photo for the post." })
    }

    db.addRecipe(req.body)
    .then(recipe => {
        res.json(recipe)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to add the recipe" });
    })
})

router.put("/:id", (req, res) => {
    if(!req.body.title || !req.body.instructions || !req.body.ingredients || !req.body.photo) {
        return res.status(400).json({ errorMessage: "Please provide title, instructions, ingredients and photo for the post." })
    }

    db.updateRecipe(req.params.id, req.body)
    .then(recipe => {
        res.status(200).json({ message: `Recipe is updated!`})
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to add the recipe" });
    })
})

router.delete("/:id", (req, res) => {
    db.deleteRecipe(req.params.id)
    .then(recipe => {
        res.status(200).json({ message: `Recipe is deleted!`})
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to add the recipe" });
    })
})

module.exports = router