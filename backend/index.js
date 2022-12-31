const express = require('express')
const dotenv = require('dotenv').config()
const logger = require('./middleware/logger')
const userRouter = require('./routes/User-routes')
const colors = require('colors')
//const profileRouter = require('./routes/Profile')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
const app = express()

connectDB()

app.use(express.json())    // body parser for raw json (middleware)
app.use(express.urlencoded({ extended : false }))
app.use(logger)
app.use('/api/users', userRouter)


app.listen(PORT, (error) => {
    if (error) {
      console.log(error)
    }
    console.log('Server is running on port:',PORT)
  })