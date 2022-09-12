import RecordatoriosApi from '../api/RecordatoriosApi.js'

import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

const schema = buildSchema(`
    type Recordatorio {
        id: ID!
        titulo: String,
        descripcion: String,
        leido: Boolean,
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
        createRecordatorio(datos: RecordatorioInput): Recordatorio,
        marcarLeidoRecordatorio(id: ID!): Recordatorio,
        deleteRecordatoriosLeidos: [Recordatorio]
    }
`)

export default class GraphQLController {
    constructor() {
        const api = new RecordatoriosApi()
        return graphqlHTTP({
            schema: schema,
            rootValue: {
                getRecordatorios: api.getRecordatorios,
                createRecordatorio: api.createRecordatorio,
                marcarLeidoRecordatorio: api.marcarLeidoRecordatorio,
                deleteRecordatoriosLeidos: api.deleteRecordatoriosLeidos
            },
            graphiql: true
        })
    }
}