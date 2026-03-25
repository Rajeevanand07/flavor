const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bycript = require("bcryptjs")

async function registerUser(req, res) {
  try {
    const {name, email, password} = req.body

    const hashedPass = await bycript.hash(password, 10)
    const user = await userModel.create({
      name, email, password : hashedPass
    })
    res.status(201).json({
      message : "user register",
      user : user
    })
  } catch (error) {
    res.json({
      message : "error while register",
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

    const token = jwt.sign({id : user._id}, process.env.JWT_SECRET)
    res.cookie("token" , token)

    res.status(200).json({
      message : "login success",
      user : user,
    })

  } catch (error) {
    res.json({
      message : "error while login",
      error : error
    })
  }
}




module.exports = {
  registerUser,
  LoginUser
}