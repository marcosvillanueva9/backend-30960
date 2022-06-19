import express from 'express';
import { faker } from '@faker-js/faker';
faker.locale = 'en';

const app = express();

function createRandomUser(id) {
    return {
        id: id,
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.color.human()
    }
}

app.get('/test', (req, res) => {
    const cant = Number(req.query.cant) || 10;
    res.json(Array.from(new Array(cant), (v, i) => createRandomUser(i + 1)))
})

const PORT = 8080
const srv = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})