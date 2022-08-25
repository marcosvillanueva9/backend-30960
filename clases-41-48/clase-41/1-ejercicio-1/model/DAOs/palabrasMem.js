import palabraDTO from "../DTOs/palabras.js";
import PalabrasBaseDAO from "./palabras.js";

class PalabrasMemDAO extends PalabrasBaseDAO {

    constructor() {
        super()
        this.palabras = []
    }

    obtenerPalabras = async () => {
        try {
            return this.palabras
        } catch (error) {
            console.log('error en obtener la db')
            return []
        }
    }

    guardarPalabra = async (palabra) => {
        try {
            let id = this.getNextId(this.palabras)
            let timestamp = Date.now()
            let palabraGuardada = palabraDTO(palabra, id, timestamp)
            this.palabras.push(palabraGuardada)
            return palabraGuardada
        } catch (error) {
            console.log('error en guardar palabra')
            let palabra = {}
            return palabra
        }
    }
}

export default PalabrasMemDAO