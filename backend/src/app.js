const express = require("express")
const recipeRoute = require('./routes/recipe.route')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors({
  origin : 'http://localhost:5173'
}))


app.use('/api/recipe', recipeRoute)


module.exports = app