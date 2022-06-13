class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    static saludoCorto = 'Hola'

    saludoCompleto() {
        console.log(`Buenas, soy ${this.nombre}`)
    }

    saludoCorto() {
        console.log(Persona.saludoCorto)
    }
}

let persona1 = new Persona("Marcos", 23)

// Cual o cuales de estas sentencias van a fallar?

// console.log(persona1.saludoCorto)
// console.log(persona1.saludoCorto())
// console.log(Persona.saludoCorto)