const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes.js')

const App = express()

App.use(morgan('dev'))
App.use(bodyParser.urlencoded({ extended:false }))
App.use(express.json())
App.use(cors())
App.use(routes)

App.listen(3030, () => console.log('Servidor rodando na url: http://localhost:3030/'))