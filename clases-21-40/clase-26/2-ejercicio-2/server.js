const express = require('express')
const { engine: exphbs } = require('express-handlebars')
const jwt = require('./jwt.js')

const usuarios = []

const app = express()

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html')
})

app.post('/register', (req, res) => {

    const { nombre } = req.body

    const usuario = usuarios.find(usuario => usuario.nombre == nombre)
    if (usuario) {
        return res.status(400).json({
            error: 'el nombre de usuario ya existe',
        })
    }

    const user = req.body
    if (!user.contador) {
        user.contador = 0
    }

    usuarios.push(user)

    const access_token = jwt.generateAuthToken(nombre)
    res.json({access_token})
})

app.get('/register-error', (req, res) => {
    res.render('register-error')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.post('/login', (req, res) => {
    const { nombre, password } = req.body

    const usuario = usuarios.find(usuario => usuario.nombre == nombre)
    if (!usuario) {
        return res.json({error: 'no hay un usuario registrado con ese nombre'})
    }

    const passwordOk = usuario.password == password
    if (!passwordOk) {
        return res.json({error: 'password invalida'})
    }

    usuario.contador = 0

    const access_token = jwt.generateAuthToken(nombre)
    res.json({nombre, access_token})
})

app.get('/login-error', (req, res) => {
    res.render('login-error')
})

app.get('/api/datos', jwt.auth, (req, res) => {
    const usuario = usuarios.find(usuario => usuario.nombre = req.user.nombre)
    if (!usuario) {
        return res.status(404).json({error: 'usuario no encontrado'})
    }

    usuario.contador++
    res.json({
        datos: usuario,
        contador: usuario.contador
    })
})



const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))