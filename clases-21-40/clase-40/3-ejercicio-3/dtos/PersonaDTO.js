export default class PersonaDTO {
    constructor({ id, nombre, apellido }) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
    }
}

export function transformarADTO(personas) {
    if (Array.isArray(personas)) {
        return personas.map(p => new PersonaDTO(p))
    } else {
        return new PersonaDTO(personas)
    }
}