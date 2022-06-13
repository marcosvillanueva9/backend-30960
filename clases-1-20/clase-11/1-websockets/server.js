const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

httpServer.listen(8080, () => console.log('Server ON'))

io.on('connection', (socket) => {
    console.log('Se establecio conexion')
    //socket.emit('clave2', 'este es mi mensaje desde el servidor')

    io.emit('clave2', 'este es mi mensaje desde el servidor')

    socket.on('clave3', data => {
        console.log(data)
    })
})

