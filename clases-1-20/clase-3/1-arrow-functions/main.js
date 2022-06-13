// Arrow Functions
const mostrar = arg => {
    console.log(arg)
}

mostrar('esto es una arrow function')

const mostrar2 = arg => console.log(arg)

mostrar2('esto es una arrow function con un solo parametro en una sola linea')


// return implicito

const imprimir = arg => console.log(arg)
const sumar = (a,b) => a + b

let resultImprimir = imprimir('hola')
let resultSuma = sumar(2,3)

console.log(resultImprimir) // -> Undefined
console.log(resultSuma) // -> Imprime el resultado de la funcion

// ------------------------------------------------------------------------------------//
// Funciones como parametros

const fs = require('fs')

let logger = (mensajeParaLoggear) => {
    const fecha = new Date().toLocaleDateString()
    console.log(`${fecha}: ${mensajeParaLoggear}`)
}

let escribirYLoguear = (texto, logger) => {
    fs.writeFile('./file.txt', texto, err => {
        if (err) {
            logger(err)
            return
        }
    })
    logger('Se imprimio correctamente')
}


escribirYLoguear('Esta es la clase 3 de BackEnd', logger)

// ------------------------------------------------------------------------------------//
// Ejemplo operacion

const operacion = (val1, val2, operac) => {
    return operac(val1, val2)
}

const suma = (val1, val2) => {
    return val1 + val2
}

const resta = (val1, val2) => {
    return val1 - val2
}

const multiplicacion = (val1, val2) => {
    return val1 * val2
}

const division = (val1, val2) => {
    return val1 / val2
}

console.log('suma: ' + operacion(4,2,suma))
console.log('resta: ' + operacion(4,2,resta))
console.log('multi: ' + operacion(4,2,multiplicacion))
console.log('div: ' + operacion(4,2,division))

// ------------------------------------------------------------------------------------//
// Funciones como parametros v2

const sendMessage = (message) => {
    // simulo que envio un mensaje
    min = Math.ceil(200);
    max = Math.floor(202);
    return Math.floor(Math.random() * (202 - 200 + 1)) + 200;
}

const wrapperSend = (sendFunc, message) => {
    let response = null

    for (var i = 0; i<3; i++) {
        response = sendFunc(message)
        if (response != 200) {
            console.log(`Intento nº ${i+1} fallido. Response: ${response}`)
            continue
        }

        return response
    }

    return response
}

console.log(wrapperSend(sendMessage, 404))