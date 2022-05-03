const express = require("express")
const { promises: fs} = require('fs')

const app = express()

app.engine('cte', async (filePath, options, callback) => {
    try {
        const template = await fs.readFile(filePath)
        const renderizado = template.toString()
                            .replace('^^titulo$$', '' + options.titulo + '')
                            .replace('^^mensaje$$', '' + options.mensaje + '')
                            .replace('^^autor$$', '' + options.autor + '')
                            .replace('^^version$$', '' + options.version + '')
                            .replace('^^nombre$$', '' + options.nombre + '')
                            .replace('^^apellido$$', '' + options.apellido + '')
                            .replace('^^fyh$$', '' + options.fyh + '')
        return callback(null, renderizado)
    } catch (err) {
        return callback(err)
    }
})

app.set('views', './views')

app.set('view engine', 'cte')



app.get('/cte1', (req, res) => {
    const datos = {
        titulo: 'Podria hacerlo todo el dia',
        mensaje: '3-14',
        autor: 'Sully',
        version: '1.0.0'
    }

    res.render('plantilla1', datos)
})

app.get('/cte2', (req, res) => {
    const datos = {
        nombre: 'Steve',
        apellido: 'Rogers',
        fyh: new Date().toDateString(),
    }

    res.render('plantilla2', datos)
})

app.listen(8080)