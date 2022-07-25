import express from 'express'
import compression from 'compression'

const app = express()

const mensaje = 'Hola que tal'
const mensajeLargo = mensaje.repeat(1000)

app.get('/saludo', (req, res) => {
  res.send(mensajeLargo)
})

app.get('/saludozip', compression(), (req, res) => {
  res.send(mensajeLargo)
})

const PORT = 8080

app.listen(PORT, () => {
  console.log('Server en el 8080')
})