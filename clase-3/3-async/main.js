const escribirArchivo = require('./escrArch.js')

console.log('Inicio del programa')

escribirArchivo('Esto es lo que vamos a escribir', () => {
    console.log('Termine de escribir el archivo')
})

console.log('Fin del programa')

// ------------------------------------------------------------------------------------//
// Probar timers

function probarTimeOut() {
    let saludar = () => console.log('Hola')
    setTimeout(saludar, 3000)
}

probarTimeOut()

function probarSetInterval() {
    let i = 0
    handle = setInterval(() => {
        if (i == 5) {
            clearInterval(handle)
        }
        console.log(i)
        i++
    }, 1000)

}

probarSetInterval()