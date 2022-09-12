export default class RecordatoriosDao {
    constructor() {
        this.recordatorios = []
    }

    getRecordatorios() {
       return this.recordatorios
    }

    createRecordatorio(recordatorio) {
        this.recordatorios.push(recordatorio)
    }

    marcarLeidoRecordatorio(id, campo) {
        const index = this.recordatorios.findIndex(r => r.id == id)
        if (index == -1) {
            throw new Error('Recordatorio no encontrado')
        }

        const recordatoriosActualizado = {...this.recordatorios[index], ...campo}
        this.recordatorios[index] = recordatoriosActualizado
        return recordatoriosActualizado
    }

    deleteRecordatoriosWhere(campo, valor) {
        let i = 0
        const deleted = []
        while (i < this.recordatorios.length) {
            if (this.recordatorios[i][campo] == valor) {
                deleted.push(this.recordatorios.splice(i,1)[0])
            } else {
                i++
            }
        }
        return deleted
    }
}