import ContenedorMemoria from "../contenedores/ContenedorMemoria.js";
import { generarUsuario } from "../utils/generadorDeUsuarios.js";

class ApiUsuariosMock extends ContenedorMemoria {
    constructor() {
        super();
    }

    popular(cant = 50) {
        const nuevos = []
        for (let i = 0; i < cant; i++) {
            const nuevoUsuario = generarUsuario();
            const guardado = this.guardar(nuevoUsuario);
            nuevos.push(guardado);
        }
        return nuevos;
    }
}

export default ApiUsuariosMock;