import express from 'express'
import GraphQLController from './controladores/GraphQLController.js'

const app = express()

app.use(express.static('public'))

app.use('/graphql', new GraphQLController())

const PORT = 8080
app.listen(PORT, () => {
    const msg = `Servidor corriendo en puerto: ${PORT}`;
    console.log(msg)
});