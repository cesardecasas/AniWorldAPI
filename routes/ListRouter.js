const Router = require('express').Router()
const controller = require('../controllers/ListController')


Router.get('/get/:id', controller.getUserList)
Router.post('/create/:id', controller.createUserList)
Router.put('/update/:id', controller.addItem)
Router.put('/remove/:id', controller.removeItem)


module.exports = Router