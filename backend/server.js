const app = require('./src/app')
const connectToDB = require('./src/db/db')
const PORT = 3000

connectToDB()

app.listen(PORT, ()=>{
  console.log(`server is running on port http://localhost:${PORT}`)
})