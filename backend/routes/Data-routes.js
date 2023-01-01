const { Router } = require('express')
const dataRouter = Router()
const verifyAuth = require('../middleware/authMiddleware')
const { getData, setData, updateData, deleteData } = require('../controllers/Data-controller')



dataRouter.route('/')
    .get(verifyAuth, getData)
    .post(verifyAuth, setData)
dataRouter.route('/:id')
    .put(verifyAuth, updateData)
    .delete(verifyAuth, deleteData)


module.exports = dataRouter