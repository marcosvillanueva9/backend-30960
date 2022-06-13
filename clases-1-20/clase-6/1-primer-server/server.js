const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Entro al servidor correctamente')
    res.end('Nuestro primer servidor')
})

const connectedServer = server.listen(8080, () => {
    console.log('Servidor corriendo en el 8080')
})