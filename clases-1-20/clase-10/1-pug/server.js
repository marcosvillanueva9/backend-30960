// 1- crear carpeta views
// 2- npm init -y
// 3- npm i pug
const express = require('express')

const app = express()

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    const data = {
        mensaje: 'Nuestra primer pantalla con Pug', 
        parrafo: 'Esto es un parrafo largoEsto es un parrafo largo',
    }
    res.render('index', data)
})

app.listen(8080)