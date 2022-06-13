// npm init
// npm install express

// code!

const express = require('express')

const PORT = 8080

const app = express()

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})

let cantVisitas = 0
app.get('/visitas', (req, res) => {
    cantVisitas++
    res.send('La cantidad de visitas de este endpoint es de ' + cantVisitas)
})

app.get('/fyh', (req, res) => {
    res.send({fechayhora: new Date().toLocaleString()})
})