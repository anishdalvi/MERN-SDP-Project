const { Router } = require('express')
const userRouter = Router()
const verifyAuth = require('../middleware/authMiddleware')
const { registerUser, loginUser, getProfile, verifyEmail } = require('../controllers/User-controller')


userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/getProfile',verifyAuth, getProfile)
userRouter.post('/verify',verifyAuth, verifyEmail)











module.exports = userRouter