import PalabrasFactoryDAO from '../model/DAOs/palabrasFactory.js'
import Palabras from '../model/models/palabras.js'

class ServicePalabras {

    constructor() {
        this.PalabrasDAO = PalabrasFactoryDAO.get()
    }

    async obtenerPalabras(id) {
        let palabras = await this.PalabrasDAO.obtenerPalabras(id)
        return palabras.map(p => p.palabra).join(' ')
    }

    async guardarPalabra(palabra) {
        ServicePalabras.validarPalabra(palabra, true)
        return await this.PalabrasDAO.guardarPalabra(palabra)
    }

    static validarPalabra(palabra, required) {
        try {
            Palabras.validar(palabra,required)
        } catch(error) {
            throw new Error('la palabra no es valida')
        }
    }
}

export default ServicePalabras