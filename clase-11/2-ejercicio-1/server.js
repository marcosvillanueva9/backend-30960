const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const mensajes = []

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado!')

    socket.emit('mensajes', mensajes)

    socket.on('mensaje', data => {
        mensajes.push({socketid: socket.id, mensaje: data})
        io.sockets.emit('mensajes', mensajes)
    })
})

httpServer.listen(8080, () => console.log('Server ON'))



