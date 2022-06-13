const fs = require('fs')

let data = ''

data = fs.readFile('./archivos/text.txt', 'utf-8', (errorcito, contenid) => {
    if (errorcito) {
        console.log('nunca no logueen un error hijos queridos: ', + errorcito)
    } else {
        console.log(contenid)
    }
})


// //----------------------------------------------------------------------------------------------------//

fs.writeFile('./archivos/text.txt', 'Hola bienvenido', err => {
    if (err) {
        console.log('nunca no logueen un error hijos queridos: ', + err)
    } else {
        console.log('se escribio correctamente')
    }
})

// //----------------------------------------------------------------------------------------------------//

fs.appendFile('./archivos/text.txt', ' a coderhouse', err => {
    if (err) {
        console.log('nunca no logueen un error hijos queridos: ', + err)
    } else {
        console.log('se appendeo correctamnete')
    }
})

// //----------------------------------------------------------------------------------------------------//

fs.unlink('./archivos/text.txt', err => {
    if (err) {
        console.log('nunca no logueen un error hijos queridos: ', + err)
    } else {
        console.log('se elimino correctamente')
    }
})

// //----------------------------------------------------------------------------------------------------//

fs.mkdir('./archivos/archivo-clase4', err => {
    if (err) {
        console.log('nunca no logueen un error hijos queridos: ', + err)
    } else {
        console.log('se creo correctamnete')
    }
})