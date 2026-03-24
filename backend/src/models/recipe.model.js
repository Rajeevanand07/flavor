const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  chefName: {
    type: String,
    require: true,
  },
  recipeName: {
    type: String,
    require: true,
  },
  ingredients: {
    type: String,
    require: true,
  },
  Instructions: {
    type: String,
    require: true,
  },
  ImageURL: {
    type: String,
    require: true,
  },
  userId : {
    type : String,
    require : true
  }
});


const recipeModel = mongoose.model('recipe', recipeSchema)
module.exports = recipeModel
