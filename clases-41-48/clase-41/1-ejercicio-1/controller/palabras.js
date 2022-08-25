import ServicePalabras from '../service/palabras.js'

class ControladorPalabras {

    constructor() {
        this.servicePalabras = new ServicePalabras()
    }

    obtenerPalabras = async (req, res) => {
        try {
            let id = req.params.id

            let palabras = await this.servicePalabras.obtenerPalabras(id)

            res.send(palabras)
        } catch(error) {
            console.log(error)
        }
    }

    guardarPalabra = async (req, res) => {
        try {
            let palabra = req.body

            let palabraGuardada = await this.servicePalabras.guardarPalabra(palabra)
            res.json(palabraGuardada)
        } catch(error) {
            console.log(error)
        }
    }
}

export default ControladorPalabras