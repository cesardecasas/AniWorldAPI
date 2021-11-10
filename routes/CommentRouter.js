const Router = require('express').Router()
const controller = require('../controllers/CommentController')


Router.get('/getall/:id', controller.getComments)
Router.get('/getuser/:id', controller.getUserComments)
Router.put('/edit/:id', controller.editComment)
Router.post('/create', controller.createComment)
Router.delete('/delete/:id', controller.deleteComment)


module.exports = Router