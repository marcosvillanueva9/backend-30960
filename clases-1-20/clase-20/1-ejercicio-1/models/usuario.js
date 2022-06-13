import mongooose from 'mongoose';

const usuariosCollection = 'usuarios';

const UsuariosSchema = new mongooose.Schema({
    nombre: String,
    apellido: String,
    dni: String,
})

export const usuarios = mongooose.model(usuariosCollection, UsuariosSchema);