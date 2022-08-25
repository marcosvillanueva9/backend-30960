import express from 'express'
const router = express.Router()

import ControladorPalabras from '../controller/palabras.js'

class RouterPalabras {

    constructor() {
        this.controladorPalabras = new ControladorPalabras()
    }

    start() {
        router.get('/', this.controladorPalabras.obtenerPalabras)
        router.post('/', this.controladorPalabras.guardarPalabra)

        return router
    }
}

export default RouterPalabras