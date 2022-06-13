const express = require('express')
const { Router } = express

const PORT = 8080

const app = express()
const router = Router()

const user = {
    name: 'Marcos',
    favSong: 'Let it be',
}

router.get('/usuario', (req, res) => {
    res.send(user)
})

router.put('/usuario', (req, res) => {
    user.favSong = req.body.favSong
    res.send('Actualizado correctamente')
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})