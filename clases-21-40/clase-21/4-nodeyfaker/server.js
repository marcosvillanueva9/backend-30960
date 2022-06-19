import express, { json } from 'express';
import UsuariosRouter from './router/usuarios.js';

const app = express();

app.use(json())

app.use('/api/usuarios', new UsuariosRouter());

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
