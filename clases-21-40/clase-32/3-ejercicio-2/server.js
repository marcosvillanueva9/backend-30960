const express = require('express')
const app = express()
const cluster = require('cluster')
const os = require('os')

/* -------------------------- FORK ---------------------------- */
//node server.js FORK
//artillery quick -c 50 -n 50 "http://localhost:8080/ramdom-debug" > artillery_fork.txt
/* ----------------------------------------------------------- */

/* -------------------------- CLUSTER ---------------------------- */
//node server.js CLUSTER
//artillery quick -c 50 -n 50 "http://localhost:8080/ramdom-debug" > artillery_cluster.txt
/* ----------------------------------------------------------- */

const MODO_CLUSTER = process.argv[2] == 'CLUSTER'

/* --------------------------------------------------------------------------- */
/* MASTER */
if(MODO_CLUSTER && cluster.isMaster) {
    const numCPUs = os.cpus().length
    
    console.log(`Número de procesadores: ${numCPUs}`)
    console.log(`PID MASTER ${process.pid}`)

    for(let i=0; i<numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
}
/* --------------------------------------------------------------------------- */
/* WORKER */
else {
    function calcularRandoms(min,max,cant) {
        let randoms = []
        for(let i=0; i<cant; i++) {
            let random = parseInt(Math.random()*(max-min+1)) + min
            randoms.push(random)
        }
        return randoms
    }

    app.get('/ramdom-debug', (req,res) => {
        let randoms = calcularRandoms(0,9,10000)
        console.log(randoms)
        res.json({randoms});
    })

    app.get('/ramdom-nodebug', (req,res) => {
        let randoms = calcularRandoms(0,9,10000)
        res.json({randoms});
    })

    const PORT = 8080
    const server = app.listen(PORT, () => {
        console.log(`Servidor express escuchando en el puerto ${PORT} - PID MASTER ${process.pid}`)
    })
    server.on('error', error => console.log(`Error en servidor ${error}`))
}