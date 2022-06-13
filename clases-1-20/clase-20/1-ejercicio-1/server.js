import mongooose from 'mongoose';
import * as models from './models/usuario.js';

ReadFromDB();

async function ReadFromDB() {

    try {
        const URL = "mongodb+srv://coderhouse:coderhouse@cluster0.e8d1sne.mongodb.net/ecommerce?retryWrites=true&w=majority"
        
        let conexion = await mongooose.connect(URL);
        console.log("Conexion exitosa");

        // Read usuarios
        const usuarios = await models.usuarios.find();
        console.log(usuarios);

        // Create usuario Federico Perez
        const usuario = new models.usuarios({
            nombre: "Federico",
            apellido: "Perez",
            dni: "12345678",
        });
        await usuario.save();
        console.log("Usuario creado");

        return
    } catch (error) {
        console.log(error);
    }
}