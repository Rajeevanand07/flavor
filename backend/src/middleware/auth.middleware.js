const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

async function authUser(req, res, next){
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({
      message : "user not authorized"
    })
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  const user = await userModel.findOne({_id : decoded.id})

  if (!user) {
    return res.json({
      message : "user not found"
    })
  }
  req.user = user
  next()
} 


module.exports = authUser