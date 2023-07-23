const express = require('express')
const dotenv = require('dotenv').config()
const logger = require('./middleware/logger')
const userRouter = require('./routes/User-routes')
const dataRouter = require('./routes/Data-routes')
const colors = require('colors')
//const profileRouter = require('./routes/Profile')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
const app = express()
const path = require("path");


connectDB()

app.use(express.json())    // body parser for raw json (middleware)
app.use(express.urlencoded({ extended : false }))

app.use(logger)

app.use('/api/users', userRouter)
app.use('/api/data', dataRouter)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Not in Production"));
}


app.listen(PORT, (error) => {
    if (error) {
      console.log(error)
    }
    console.log('Server is running on port:',PORT)
  })