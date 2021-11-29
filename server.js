const AppRouter = require('./routes/AppRouter')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')

const PORT = process.env.PORT || 3001
const app = express()


app.use(logger('dev'))
app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.disable('X-Powered-By')
app.use(express.static(path.join(__dirname, 'client', 'build')))


app.get('/', (req, res) => res.json({ message: 'Server Works x2' }))

app.use('/api', AppRouter)

app.get('*', (req,res)=>res.sendFile(path.join(__dirname, 'client', 'build','index.html')))




app.listen(PORT, async () => {
    try {
      console.log('Database Connected')
      console.log(`App listening on port: ${PORT}`)
    } catch (error) {
      console.log(error)
    }
})