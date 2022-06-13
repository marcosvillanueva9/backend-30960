// npm init -y
// npm install -D typescript ts-loader webpack webpack-cli webpack-node-externals
// npm install express @types/express
// ./node_modules/.bin/tsc --init
// "noImplicity": false                 <-- tsconfig.json

import express from 'express'
import { getTime } from './lib/utils'
import Persona from './Persona'

const p: Persona = new Persona("Coder", "House")

const app = express()

app.get("/", (req, res) => {
    res.send({
        time: getTime(),
        name: p.getFullName(),
    })
})

const PORT = 8080

app.listen(PORT, () => {
    console.log("conectado")
})