const recipeModel = require("../models/recipe.model");

async function createRecipe(req, res) {
  try {
    const { chefName, recipeName, ingredients, Instructions, ImageURL } =
      req.body;
    const user = req.user;

    const recipe = await recipeModel.create({
      chefName,
      recipeName,
      ingredients,
      Instructions,
      ImageURL,
      userId: user._id,
    });
    res.status(200).json({
      message: "recipe created",
      recipe: recipe,
    });
  } catch (error) {
    res.json({
      message: "error while creating recipe",
      error: error,
    });
  }
}

async function getAllRecipes(req, res) {
  try {
    const allRecipes = await recipeModel.find();
    res.status(200).json({
      message: "all recipes",
      recipes: allRecipes,
    });
  } catch (error) {
    res.json({
      message: "error while fetching all recipes",
      error: error,
    });
  }
}

async function getRecipe(req, res) {
  try {
    const id = req.params.id;
    const recipe = await recipeModel.findOne({ _id: id });
    res.status(200).json({
      message: "recipes",
      recipe: recipe,
    });
  } catch (error) {
    res.json({
      message: "error while fetching recipe",
      error: error,
    });
  }
}

async function deleteRecipe(req, res) {
  try {
    const id = req.params.id;
    const recipe = await recipeModel.findOneAndDelete({ _id: id });
    res.status(200).json({
      message: "recipes deleted",
      recipe: recipe,
    });
  } catch (error) {
    res.json({
      message: "error while deleting recipe",
      error: error,
    });
  }
}
async function updateRecipe(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const recipe = await recipeModel.findOneAndUpdate({ _id: id }, data);
    res.status(200).json({
      message: "recipes updated",
      recipe: recipe,
    });
  } catch (error) {
    res.json({
      message: "error while updating recipe",
      error: error,
    });
  }
}

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
};
