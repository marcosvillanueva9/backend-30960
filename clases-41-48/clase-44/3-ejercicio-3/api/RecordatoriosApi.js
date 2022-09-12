import crypto from 'crypto'
import Recordatorio from '../modelos/Recordatorio.js'
import RecordatoriosDao from '../daos/RecordatoriosDao.js'

export default class RecordatoriosApi {
    constructor() {
        this.dao = new RecordatoriosDao()
    }

    getRecordatorios = () => {
        return this.dao.getRecordatorios()
    }

    createRecordatorio = ({datos}) => {
        const id = crypto.randomBytes(10).toString('hex')
        const nuevoRecordatorio = new Recordatorio(id, datos)
        this.dao.createRecordatorio(nuevoRecordatorio)
        return nuevoRecordatorio
    }

    marcarLeidoRecordatorio = ({id}) => {
        const recordatorioLeido = this.dao.marcarLeidoRecordatorio(id, {leido: true})
        return recordatorioLeido
    }

    deleteRecordatoriosLeidos = () => {
        const deleted = this.dao.deleteRecordatoriosWhere('leido', true)
        return deleted
    }
}