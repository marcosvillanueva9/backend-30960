import mongoose from "mongoose";
import * as models from "./models/estudiante.js";

CRUD();

function CRUD() {
    const URL = "mongodb://localhost:27017/colegio";

    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Conexión a MongoDB correcta");

        // Create
        const estudiantes = [
            { nombre: "Pedro", apellido: "Mei", edad: 21, dni: "12345678", curso: "1A", nota: 7 },
            { nombre: "Ana", apellido: "Gonzalez", edad: 32, dni: "87654321", curso: "1A", nota: 8 },
            { nombre: "Jose", apellido: "Picos", edad: 29, dni: "12345672", curso: "2A", nota: 6 },
            { nombre: "Lucas", apellido: "Blanco", edad: 22, dni: "87654324", curso: "3A", nota: 10 },
            { nombre: "Maria", apellido: "Garcia", edad: 36, dni: "12345671", curso: "1A", nota: 9 },
            { nombre: "Federico", apellido: "Perez", edad: 41, dni: "12345671", curso: "2A", nota: 5 },
            { nombre: "Tomas", apellido: "Sierra", edad: 19, dni: "12345671", curso: "2B", nota: 4 },
            { nombre: "Carlos", apellido: "Fernandez", edad: 33, dni: "12345671", curso: "3B", nota: 2 },
            { nombre: "Fabio", apellido: "Pieres", edad: 39, dni: "12345671", curso: "1B", nota: 9 },
            { nombre: "Daniel", apellido: "Gallo", edad: 25, dni: "12345671", curso: "3B", nota: 2 },
        ];

        models.estudiantes.create(estudiantes)
        .then(() => {
            console.log("Estudiantes creados correctamente");
        })
    })
    .catch(error => {
        console.log("Error: ", error);
    })
}