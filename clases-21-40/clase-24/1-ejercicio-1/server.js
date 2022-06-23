import express from 'express'
import session from 'express-session'
import sfs from 'session-file-store'
const FileStore = sfs(session)

const app = express()

app.use(
  session({

    store: new FileStore({ 
        path: './sessions', 
        ttl: 60
    }),


    secret: 'obiwankenobi',
    resave: false,
    saveUninitialized: false,
  })
)

app.get('/', (req, res) => {

  if (req.session.contador) {
    req.session.contador++

    res.send(`${req.session.nombre}, visitaste la pagina ${req.session.contador} veces`)
  } else {
    req.session.contador = 1
    req.session.nombre = req.query.nombre || 'Anakin'

    res.send(`Hello there. ${req.session.nombre}`)
  }
})

app.get('/olvidar', (req, res) => {
  const nombre = req.session.nombre
  req.session.destroy( err => {
    if (err) {
      res.json({error: 'olvidar', descripcion: err})
    } else {
      res.send(`Hasta luego ${nombre}`)
    }
  })
})

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log('Servidor escuchando en el ', PORT)
})