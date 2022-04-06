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
contador1.contar()
contador1.contar()

contador2.contar()
contador2.contar()
contador2.contar()

// Obtener cuentas locales

console.log(`La cuenta de ${contador1.nombre} es de ${contador1.obtenerCuentaLocal()}`)
console.log(`La cuenta de ${contador2.nombre} es de ${contador2.obtenerCuentaLocal()}`)

// Obtener cuenta global desde la clase

console.log(`La cuenta de Global es de ${Contador.cuentaTotal}`)

// Obtener cuenta global desde las instancias

console.log(`La cuenta de Global es de ${contador1.obtenerCuentaGlobal()}`)