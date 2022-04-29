const express = require('express')
const { Router } = express

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Mascotas
const routerMascotas = new Router()

const mascotas = []

routerMascotas.get('/', (req, res) => {
    res.json(mascotas)
})

routerMascotas.post('/', (req, res) => {
    mascotas.push(req.body)
    res.json(mascotas)
})

// Personas

const routerPersonas = new Router()

const personas = []

routerPersonas.get('/', (req, res) => {
    res.json(personas)
})

routerPersonas.post('/', (req, res) => {
    personas.push(req.body)
    res.json(personas)
})

// Carga de Routers

app.use('/mascotas', routerMascotas)
app.use('/personas', routerPersonas)

// Levantar Server

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))