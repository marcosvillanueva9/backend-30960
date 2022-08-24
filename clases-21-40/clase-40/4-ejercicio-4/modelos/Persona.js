export default class Persona {
    #id
    #nombre
    #apellido
    #dni

    constructor({nombre, apellido, dni, id }) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
    }

    get id() { return this.#id }

    set id(id) {
        if (!id) throw new Error('"id" es un campo requerido')
        this.#id = id
    }

    get nombre() { return this.#nombre }

    set nombre(nombre) {
        if (!nombre) throw new Error('"nombre" es un campo requerido')
        this.#nombre = nombre
    }

    get apellido() { return this.#apellido }

    set apellido(apellido) {
        if (!apellido) throw new Error('"apellido" es un campo requerido')
        this.#apellido = apellido
    }

    get dni() { return this.#dni }

    set dni(dni) {
        if (!dni) throw new Error('"dni" es un campo requerido')
        if (isNaN(dni)) throw new Error('"dni" es un campo de caracteres exclusivamente numéricos')
        this.#dni = dni
    }

    datos() {
        return JSON.parse(JSON.stringify({
            id: this.#id,
            nombre: this.#nombre,
            apellido: this.#apellido,
            dni: this.#dni
        }))
    }
}
