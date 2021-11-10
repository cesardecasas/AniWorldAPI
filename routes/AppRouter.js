const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ListRouter = require('./ListRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/user', UserRouter)
Router.use('/list', ListRouter)
Router.use('/comment', CommentRouter)


module.exports = Router