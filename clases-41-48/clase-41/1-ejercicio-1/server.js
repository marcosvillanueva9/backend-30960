import express from 'express'
import config from './config.js'
import cors from 'cors'
import RouterPalabras from './router/palabras.js'

const app = express()

if(config.NODE_ENV == 'development') app.use(cors())

app.use(express.static('public'))
app.use(express.json())

const routerPalabras = new RouterPalabras()

app.use('/palabras', routerPalabras.start())

const PORT = config.PORT
const server = app.listen(PORT, 
    () => console.log(
        `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV})`
))
server.on('error', error => console.log('Servidor express en error:', error) )
