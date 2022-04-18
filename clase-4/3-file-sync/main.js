const fs = require('fs')

let data = ''

try {
    data = fs.readFileSync('./archivos/text.txt', 'utf-8')
} catch (err) {
    console.log(err)
}

console.log(data)

//----------------------------------------------------------------------------------------------------//

fs.writeFileSync('./archivos/text.txt', 'Hola bienvenido')

//----------------------------------------------------------------------------------------------------//

fs.appendFileSync('./archivos/text.txt', ' a coderhouse')

//----------------------------------------------------------------------------------------------------//

fs.unlinkSync('./archivos/text.txt')

//----------------------------------------------------------------------------------------------------//

fs.mkdirSync('./archivos/text.txt')