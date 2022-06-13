// Fecha y hora
const fs = require('fs')

try {
    fs.writeFileSync('./fyh.txt', new Date().toLocaleString())
} catch (err) {
    throw new Error('Error en la escritura: ', + err)
}

try {
    const fechaYHora = fs.readFileSync('./fyh.txt', 'utf-8')
    console.log(fechaYHora)
} catch (err) {
    throw new Error('Error en la lectura: ', + err)
}