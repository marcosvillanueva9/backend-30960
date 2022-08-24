export default class PersonasDaoMem {

    constructor() {
        this.personas = []
    }

    getIndex(id) {
        return this.personas.findIndex(persona => persona.id === id)
    }

    getAll() {
        return this.personas
    }

    getById(id) {
        return this.personas[this.getIndex(id)]
    }

    save(personaNueva) {
        this.personas.push(personaNueva)
        return personaNueva
    }

    deleteById(id) {
        const [ borrada ] = this.personas.splice(this.getIndex(id), 1)
        return borrada
    }

    deleteAll() {
        this.personas = []
    }

    updateById(id, nuevo) {
        const index = this.getIndex(id)
        const actualizado = { ...this.personas[index], ...nuevo}
        this.personas.splice(index, 1, actualizado)
        return actualizado
    }
}