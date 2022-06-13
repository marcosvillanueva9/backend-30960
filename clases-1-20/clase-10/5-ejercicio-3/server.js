const express = require('express')

const app = express()

const personas = []

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('inicio', { personas })
})

app.post('/personas', (req, res) => {
    personas.push(req.body)
    res.redirect('/')
})

const server = app.listen(8080, () => {
    console.log('Servidor esta corriendo satisfactoriamente')
})