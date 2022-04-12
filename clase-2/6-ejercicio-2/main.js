class Contador {
    constructor(nombre) {
        this.nombre = nombre
        this.cuentaLocal = 0
    }

    static cuentaTotal = 0

    contar() {
        this.cuentaLocal++
        Contador.cuentaTotal++
    }

    obtenerResponsable() {
        return this.nombre
    }

    obtenerCuentaLocal() {
        return this.cuentaLocal
    }

    obtenerCuentaGlobal() {
        return Contador.cuentaTotal
    }
}

// Instanciamos nuestro primer contador
const contador1 = new Contador('Pepe')

// Instanciamos nuestro segundo contador
const contador2 = new Contador('Jose')

// Contadores suman al recuento
contador1.contar() // cuentaLocal de contador1 es 1
contador1.contar() // cuentaLocal de contador1 es 2

contador2.contar() // cuentaLocal de contador2 es 1
contador2.contar() // cuentaLocal de contador2 es 2
contador2.contar() // cuentaLocal de contador2 es 3

// cuentaTotal es 5

// Obtener cuentas locales

console.log(`La cuenta de ${contador1.obtenerResponsable()} es de ${contador1.obtenerCuentaLocal()}`)
console.log(`La cuenta de ${contador2.obtenerResponsable()} es de ${contador2.obtenerCuentaLocal()}`)

// Obtener cuenta global desde la clase

console.log(`La cuenta Global es de ${Contador.cuentaTotal}`)

// Obtener cuenta global desde las instancias

console.log(`La cuenta Global es de ${contador1.obtenerCuentaGlobal()}`)
console.log(`La cuenta Global es de ${contador2.obtenerCuentaGlobal()}`)