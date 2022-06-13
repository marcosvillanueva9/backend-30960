const express = require('express')
const { Router } = express
//const ProductosApi = require('./api/productos.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//const productos = new ProductosApi()

const productosApi = new Router()

productosApi.put('/:id', (req, res) => {
    res.json('ok')
})
  
app.use('/api/productos', productosApi)

const PORT = 8081
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
