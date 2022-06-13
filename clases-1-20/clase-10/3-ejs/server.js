// crear carpeta views index.ejs
const express = require("express")

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', {mensaje: 'Bienvenidos a nuestra primer plantilla de ejs'})
})

app.listen(8080)