// comandos powershell
// tasklist /fi "imagename eq node.exe" -> lista todos los procesos de node.js activos
// taskkill /pid numpid /f -> mata un proceso por su número de PID

// comandos bash
// fuser <PORT>/tcp [-k] -> encuentra [y mata] al proceso ocupando el puerto PORT

import express from 'express'
import cluster from 'cluster' /* https://nodejs.org/dist/latest-v14.x/docs/api/cluster.html */
import os from 'os'

const numCPUs = os.cpus().length

/* --------------------------------------------------------------------------- */
/* MASTER */
if (cluster.isPrimary) {
    console.log(numCPUs)
    console.log(`PID MASTER ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
}
/* --------------------------------------------------------------------------- */
/* WORKERS */
else {

    const app = express()

    //console.log(parseInt(process.argv[2]))
    const PORT = parseInt(process.argv[2]) || 8080

    app.get('/', (req, res) => {
        res.send(`Servidor express en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
    })

    app.listen(PORT, err => {
        if (!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
    })
}
