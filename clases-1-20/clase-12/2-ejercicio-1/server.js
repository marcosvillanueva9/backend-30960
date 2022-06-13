const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const messages = []

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado!')

    socket.emit('messages', messages)

    socket.on('new-message', data => {
        messages.push(data)

        io.sockets.emit('messages', messages)
    })
})

const PORT = process.env.PORT || 8080

httpServer.listen(PORT, () => console.log('Iniciando en el puerto: ' + PORT))