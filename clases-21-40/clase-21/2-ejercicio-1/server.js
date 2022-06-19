import express from 'express';
const app = express();

const nombres = ['Luis', 'Lucia', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'marron']

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function createRandomUser() {
    return {
        nombre: getRandomElement(nombres),
        apellido: getRandomElement(apellidos),
        color: getRandomElement(colores)
    }
}

app.get('/test', (req, res) => {
    const objs = []
    for (let i = 0; i < 10; i++) {
        objs.push(createRandomUser())
    }
    res.json(objs)

    //res.json(Array.from(new Array(10), () => createRandomUser()))
})

const PORT = 8080
const srv = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})