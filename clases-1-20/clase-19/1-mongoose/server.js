import mongoose from "mongoose";
import * as models from "./models/usuario.js";

CRUD();

async function CRUD() {
    try {
        const URL = "mongodb://localhost:27017/ecommerce";

        let conexion = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("Conexión a MongoDB correcta");

        // Create
        const usuario = { nombre: "Juan", apellido: "Perez", email: "jp@g.com", usuario: "jp", password: 12345 };
        const usuarioCreado = await models.usuarios.create(usuario);

        console.log("Usuario creado: ", usuarioCreado);

        // Read

        const usuarios = await models.usuarios.find();
        console.log("Usuarios: ", usuarios);

        // Update
        const usuarioActualizado = await models.usuarios.findOneAndUpdate({nombre: "Juan"}, { nombre: "Juanito" });
        console.log("Usuario actualizado: ", usuarioActualizado);

        // Delete
        const usuarioEliminado = await models.usuarios.findOneAndDelete()
        console.log("Usuario eliminado: ", usuarioEliminado);

    } catch (error) {
        console.log("Error: ", error);
    } finally {
        mongoose.disconnect();
    }

    console.log("Fin del programa");
}