import { transformarADTO } from "./PersonaDTO.js"

export default class PersonasDaoMem {

    constructor() {
        this.personas = []
    }

    getIndex(id) {
        return this.personas.findIndex(persona => persona.id === id)
    }

    getAll() {
        return transformarADTO(this.personas)
    }

    getById(id) {
        return transformarADTO(this.personas[this.getIndex(id)])
    }

    save(personaNueva) {
        this.personas.push(personaNueva)
        return transformarADTO(personaNueva)
    }

    deleteById(id) {
        const [ borrada ] = this.personas.splice(this.getIndex(id), 1)
        return transformarADTO(borrada)
    }

    deleteAll() {
        this.personas = []
    }

    updateById(id, nuevo) {
        const index = this.getIndex(id)
        const actualizado = { ...this.personas[index], ...nuevo}
        this.personas.splice(index, 1, actualizado)
        return transformarADTO(actualizado)
    }
}