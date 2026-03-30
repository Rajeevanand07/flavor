const express = require("express")
const recipeRoute = require('./routes/recipe.route')
const userRoute = require('./routes/user.route')
const cors = require('cors')
const cookieParser = require("cookie-parser")

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin : ['https://flavor-sand.vercel.app','http://localhost:5173'],
  credentials : true
}))


app.use('/api/recipe', recipeRoute)
app.use('/api/user', userRoute)


module.exports = app