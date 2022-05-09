// crear carpeta views con layout y nivel
// npm i express & pug
// http://localhost:8080/datos?min=10&nivel=15&max=20&titulo=<i>Medidor</i>
const express = require('express')

const app = express()

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/datos', (req, res) => {
    res.render('nivel', req.query)
})

app.listen(8080)