const express = require('express')
const recipeController = require('../controllers/recipe.controller')
const router = express.Router()

router.post('/', recipeController.createRecipe)
router.get('/', recipeController.getAllRecipes)
router.get('/:id', recipeController.getRecipe)
router.delete('/:id', recipeController.deleteRecipe)
router.patch('/:id', recipeController.updateRecipe)

module.exports = router