const express = require('express')

const app = express()

function autenticacion(req,res,next) {
    // aca realizo un autenticacion
    console.log('aca hagan de cuenta que estoy autenticando')
    console.log('autenticado!!!!!')
    req.miAporte1 = 'autenticado correctamente'
    next()
}

app.get('/miruta1', autenticacion, (req, res) => {
    let aporte1 = req.miAporte1
    res.send(aporte1)
})
app.get('/miruta2', autenticacion, (req, res) => {
    let aporte1 = req.miAporte1
    res.send(aporte1)
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
