const express = require('express')
const bodyParser = require('body-parser')


const PORT = 8080

const app = express()
app.use( express.json() ); 
app.use( express.urlencoded({extended: true}) ); 

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})

const user = {
    name: 'Marcos',
    favSong: 'Let it be',
}

app.get('/usuario', (req, res) => {
    res.send(user)
})

app.put('/usuario', (req, res) => {
    user.favSong = req.body.favSong
    res.send('Actualizado correctamente')
})