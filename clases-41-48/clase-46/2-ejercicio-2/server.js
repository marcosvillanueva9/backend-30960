const Koa = require('koa')
const koaBody = require('koa-body')
const alumnosRoutes = require('./routes/alumnos.js')

const app = new Koa()

app.use(koaBody())

app.use(alumnosRoutes.routes())

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor Koa escuchando en el puerto ' + PORT)
})