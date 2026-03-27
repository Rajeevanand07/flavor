require("dotenv").config()
const mongoose = require('mongoose')

async function connectToDB() {
  console.log("MONGO_URI: ", process.env.MONGO_URI)
  await mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log('mongoDB connected'))
  .catch((error)=>console.log('error while connecting '+ error))
}

module.exports = connectToDB