require("dotenv").config()
const mongoose = require('mongoose')

async function connectToDB() {
  await mongoose.connect('mongodb://localhost:27017/flavor')
  .then(()=> console.log('mongoDB connected'))
  .catch((error)=>console.log('error while connecting '+ error))
}

module.exports = connectToDB