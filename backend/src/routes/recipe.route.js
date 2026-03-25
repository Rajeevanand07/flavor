const express = require('express')
const recipeController = require('../controllers/recipe.controller')
const authUser = require("../middleware/auth.middleware")
const router = express.Router()

router.post('/', authUser, recipeController.createRecipe)
router.get('/', authUser ,recipeController.getAllRecipes)
router.get('/:id',authUser, recipeController.getRecipe)
router.delete('/:id',authUser, recipeController.deleteRecipe)
router.patch('/:id', authUser, recipeController.updateRecipe)

module.exports = router