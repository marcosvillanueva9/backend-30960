const express = require('express')
const app = express()

/* -------------------------- DEBUG ---------------------------- */
//node --prof server.js
//node --prof-process slow-v8.log > prof_slow.txt

//node --inspect server.js
//chrome://inspect

//AMBOS TEST CON
//artillery quick -c 50 -n 50 "http://localhost:8080/ramdom-debug" > artillery_slow.txt

/* ----------------------------------------------------------- */

/* -------------------------- NO_DEBUG ---------------------------- */
//node --prof server.js
//node --prof-process fast-v8.log > prof_fast.txt

//node --inspect server.js
//chrome://inspect

//AMBOS TEST CON
//artillery quick -c 50 -n 50 "http://localhost:8080/ramdom-nodebug" > artillery_fast.txt
/* ----------------------------------------------------------- */

function calcularRandoms(min, max, cant) {
    let randoms = []
    for (let i = 0; i < cant; i++) {
        let random = parseInt(Math.random() * (max - min + 1)) + min
        randoms.push(random)
    }
    return randoms
}

app.get('/ramdom-debug', (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000)
    console.log(randoms)
    res.json({ randoms });
})

app.get('/ramdom-nodebug', (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000)
    res.json({ randoms });
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
