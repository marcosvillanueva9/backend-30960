// npm init -y
// npm i knex mysql

const { options } = require('./options/mysqlconn.js')
const knex = require('knex')(options)

const usuarios = [
    {nombre: 'Juan Ignacio', apellido: 'Duarte', edad: 25, email: 'asd@asd'},
    {nombre: 'Wilander', apellido: 'Velazco', edad: 34, email: 'asd@asd'},
    {nombre: 'Miguel', apellido: 'Avalle', edad: 30, email: 'asd@asd'},
]

knex('usuarios').insert(usuarios)
    .then(() => console.log('Se inserto la data. Viva la patria!'))
    .catch((err) => { console.log(err); throw err})
    .finally(() => {
        knex.destroy()
    })