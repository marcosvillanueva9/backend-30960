import express from 'express'
import logger from './logger.js'

const app = express()

app.get('/sumar', (req, res) => {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)

    if (!isNaN(n1) && !isNaN(n2)) {
        let child = logger.child({a: 2})
        child.info('Parametros correctos: ' + n1 + ' ' + n2)
        res.send(`El resultado de ${n1} + ${n2} es ${n1+n2}`)
    } else {
        logger.error('Parametros invalidos')
        res.send('parametros de entrada no validos')
    }
})

app.all('*', (req, res) => {
    const { url, method } = req
    logger.warn(`Ruta ${method} ${url} no implementada`)
    res.send(`Ruta ${method} ${url} no implementada`)
})

const PORT = 8080

const server = app.listen(PORT, error => {
    if (error) {
        logger.error(`Error iniciando el server`)
    }
    logger.info('Server en el 8080')
})

server.on('error', error => {
    logger.error(`Error en el servidor: ${error}`)
})