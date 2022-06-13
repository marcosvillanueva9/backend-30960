const http = require('http')

const server = http.createServer((request, response) => {
    response.end(getMensaje())
})

const PORT = 8080

const connectedServer = server.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT)
})

const getMensaje = () => {
    const hora = new Date().getHours()

    if (hora >= 6 && hora <= 12) {
        return 'Buenos Dias!'
    }

    if (hora >= 13 && hora <= 19) {
        return 'Buenas Tardes!'
    }

    return 'Buenas Noches!'
}