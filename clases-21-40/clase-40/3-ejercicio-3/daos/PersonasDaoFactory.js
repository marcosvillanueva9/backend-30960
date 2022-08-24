import PersonasDaoMem from "./PersonasDaoMem.js";
import PersonasDaoFile from "./PersonasDaoFile.js";
import PersonasDaoDb from "./PersonasDaoDb.js";

const rutaFile = './personas.txt'
const connString = 'mongondb://localhost/test'

const opcion = process.argv[2] || 'Mem'

let dao
switch (opcion) {
    case 'Mongo':
        dao = new PersonasDaoDb(connString)
        await dao.init()
        break
    case 'File':
        dao = new PersonasDaoFile(rutaFile)
        await dao.init()
        break
    default:
        dao = new PersonasDaoMem()
        dao.init()
}

export default class PersonasDaoFactory {
    static getDao() {
        return dao
    }
}