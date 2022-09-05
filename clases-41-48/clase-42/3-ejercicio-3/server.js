import express, {json} from 'express'

const numeros = []

const app = express()
app.use(json())

app.post('/ingreso', (req, res) => {
    const {numero} = req.body
    numeros.push(numero)
    res.send('Numero almacenado: ' + numero)
})

app.get('/egreso', (req, res) => {
    res.json({numeros})
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('server en 8080')
})

server.on('error', error => console.log(error))