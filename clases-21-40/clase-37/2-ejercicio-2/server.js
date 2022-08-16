const express = require('express')
const { suma, resta, multiplicacion, division } = require('mvillanueva9-basics')

const app = express()

app.get('/', (req,res) => {
    res.send('Hola Yarn')
})

app.get('/suma', (req,res) => {
    let { a, b } = req.query
    res.send('Resultado ' + suma(Number(a), Number(b)))
})

app.get('/resta', (req,res) => {
    let { a, b } = req.query
    res.send('Resultado ' + resta(Number(a), Number(b)))
})

app.get('/multiplicacion', (req,res) => {
    let { a, b } = req.query
    res.send('Resultado ' + multiplicacion(Number(a), Number(b)))
})

app.get('/division', (req,res) => {
    let { a, b } = req.query
    res.send('Resultado ' + division(Number(a), Number(b)))
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.error(`Error en servidor`, error))