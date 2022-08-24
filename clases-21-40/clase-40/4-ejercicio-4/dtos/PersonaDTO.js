export default class PersonaDTO {
    constructor({ id, nombre, apellido, dni }) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
    }
}

export function transformarADTO(personas) {
    if (Array.isArray(personas)) {
        return personas.map(p => new PersonaDTO(p))
    } else {
        return new PersonaDTO(personas)
    }
}