const express = require('express')
const { conn } = require('./db')
const routes = require('./routes/index.js')

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

// Manejo de errores
server.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

// Rutas
server.use('/', routes)

// Levantado del servidor
const port = process.env.PORT || 9000
conn.once('open', () => {
  server.listen(port, () => console.log('Server listening on port', port))
})

module.exports = server
