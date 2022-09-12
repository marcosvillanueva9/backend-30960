export default class Recordatorio {
    constructor(id, { titulo, descripcion, timestamp}) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.timestamp = timestamp
        this.leido = false
    }
}