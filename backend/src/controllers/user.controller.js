const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

async function registerUser(req, res) {
  try {
    const data = req.body
    const user = await userModel.create(data)
    res.status(201).json({
      message : "user created",
      user : user
    })
  } catch (error) {
    res.json({
      message : "error while creating user",
      error : error
    })
  }
}
async function LoginUser(req, res) {
  try {
    const {email, password} = req.body
    const user = await userModel.findOne({email})
    if (!user) {
      return res.status(401).json({
        message : "user not authorized"
      })
    }

    const decoded = jwt.sign({id : user._id}, process.env.JWT_SECRET)
    
    res.status(200).json({
      user : user,
      token : decoded
    })

  } catch (error) {
    res.json({
      message : "error while creating user",
      error : error
    })
  }
}



module.exports = {
  registerUser,
  LoginUser
}