// npm init
// npm install express

const express = require('express')

const PORT = 8080

const app = express()

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})

app.get('/', (req, res) => {
    res.send({mensaje: 'Hola Coderhouse'})
})

// GET
// POST
// PUT
// PATCH
// DELETE
// OPTIONS
// HEAD