import express from 'express';
import routerOps from './rutas/operaciones.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/operaciones', routerOps);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

server.on('error', (err) => {
    console.log(err);
})
