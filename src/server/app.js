const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/index.js')
require('./db.js')

const server = express()
server.name = 'API'

// Middleware para CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

// Middleware
server.use(express.json())

// Rutas
server.use('/', routes)

// Manejo de errores
server.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

const port = process.env.PORT || 9000

// Conexión a MongoDB y escucha del servidor
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDb Atlas'))
  .catch((error) => console.error(error))

server.listen(port, () => console.log('Server listening on port', port))

module.exports = server
