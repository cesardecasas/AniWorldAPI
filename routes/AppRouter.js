const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ListRouter = require('./ListRouter')

Router.use('/user', UserRouter)
Router.use('/list', ListRouter)



module.exports = Router