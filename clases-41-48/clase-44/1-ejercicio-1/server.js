import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import crypto from 'crypto'

const schema = buildSchema(`
    type Recordatorio {
        id: ID!
        titulo: String,
        descripcion: String,
        timestamp: Float
    }
    input RecordatorioInput {
        titulo: String,
        descripcion: String,
        timestamp: Float
    }
    type Query {
        getRecordatorios: [Recordatorio],
    }
    type Mutation {
        createRecordatorio(datos: RecordatorioInput): Recordatorio
    }
`)

class Recordatorio {
    constructor(id, { titulo, descripcion, timestamp}) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.timestamp = timestamp
    }
}

const recordatorios = []

function getRecordatorios() {
    return recordatorios
}

function createRecordatorio({datos}) {
    const id = crypto.randomBytes(10).toString('hex')
    const nuevoRecordatorio = new Recordatorio(id, datos)
    recordatorios.push(nuevoRecordatorio)
    return nuevoRecordatorio
}

const app = express()

app.use(express.static('public'))

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: {
        getRecordatorios,
        createRecordatorio
    },
    graphiql: true
}))

const PORT = 8080
app.listen(PORT, () => {
    const msg = `Servidor corriendo en puerto: ${PORT}`;
    console.log(msg)
});