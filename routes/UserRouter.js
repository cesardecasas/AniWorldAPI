const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const { readToken, verifyJwt } = require('../middleware/Auth')

// auth
Router.get('/get', controller.getUsers)
Router.post('/login', controller.Login)
Router.post('/register', controller.Register)
Router.get('/session', readToken, verifyJwt, controller.SessionStatus)
Router.delete('/delete/:id', controller.deleteUser)
Router.get('/getuser/:id', controller.getUser)
// auth


module.exports = Router