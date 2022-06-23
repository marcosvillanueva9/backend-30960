import express from 'express'
import session from 'express-session'
// --------------------------------------//
import redis from 'redis'
import redisStore from 'connect-redis'
const RedisStore = redisStore(session)
// --------------------------------------//
const REDIS_URL = 'redis-12838.c256.us-east-1-2.ec2.cloud.redislabs.com'
const REDIS_PORT = 12838
const REDIS_PASSWORD = 'BqAmPBpBVkSJmosBxQFvsHMKK17NEAwr'

const client = redis.createClient({
  url: `redis://default:${REDIS_PASSWORD}@${REDIS_URL}:${REDIS_PORT}`,
  legacyMode: true,
})

await client.connect()
// --------------------------------------//
const app = express()

app.use(
  session({

    store: new RedisStore({
        client: client,
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