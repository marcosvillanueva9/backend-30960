import ContenedorMemoria from "./contenedores/ContenedorMemoria.js"
import ContenedorArchivo from "./contenedores/ContenedorArchivo.js"

const modo = 'fs'
let contenedor

switch (modo) {
    case 'fs':
        contenedor = new ContenedorArchivo('./db.json')
        break;
    default:
        contenedor = new ContenedorMemoria()
        break;
}

async function guardar(obj) {
    return await contenedor.guardar(obj)
}

async function listar() {
    return await contenedor.listarAll()
}

export default {
    guardar,
    listar,
}