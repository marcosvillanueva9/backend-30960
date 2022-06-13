const { options } = require('./options/mysqlconn.js')
const knex = require('knex')(options)

knex.from('usuarios').select("nombre", "edad").where('id', '>=', '3')
    .then((rows) => {
        for (row of rows) {
            console.log(row['nombre'] + ' tiene ' + row['edad'] + ' vueltas al sol. Viva la patria!🇦🇷🧉')  
        }
    })
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })