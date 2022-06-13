import mongoose from "mongoose";
import * as models from "./models/estudiante.js";


const URL = "mongodb://localhost:27017/colegio";
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Conexión a MongoDB correcta");

    // a
    // getEstudiantesOrderByNombre
    models.estudiantes.find({}).sort({ nombre: 1 })
    .then(estudiantes => {
        console.log("a");
        console.log("Estudiantes ordenados por nombre: ", estudiantes);

        return
    })
    .then(() => {
        // b
        // Youngest student
        models.estudiantes.find({}).sort({ edad: 1 }).limit(1)
        .then(estudiantes => {
            console.log("b");
            console.log("Estudiante más joven: ", estudiantes[0]);
            return
        })
        return
    })
    .then(() => {
        // c
        // get students with course 2A
        models.estudiantes.find({ curso: "2A" })
        .then(estudiantes => {
            console.log("c");
            console.log("Estudiantes del curso 2A: ", estudiantes);
            return
        })
        return
    })
    .then(() => {
        // d
        // second youngest student
        models.estudiantes.find({}).sort({ edad: 1 }).skip(1).limit(1)
        .then(estudiantes => {
            console.log("d");
            console.log("Estudiante segundo más joven: ", estudiantes[0]);
            return
        })
        return
    })
    .then(() => {
        // e
        // nombre, apellido and curso of students ordered by apellido
        models.estudiantes.find({}, {nombre: 1, apellido: 1, curso: 1, _id: 0}).sort({ apellido: 1 })
        .then(estudiantes => {
            console.log("e");
            console.log("Estudiantes ordenados por apellido: ", estudiantes);
            return
        })
        return
    })
    .then(() => {
        // f
        // students with note equal 10
        models.estudiantes.find({ nota: 10 })
        .then(estudiantes => {
            console.log("f");
            console.log("Estudiantes con nota 10: ", estudiantes);
            return
        })
        return
    })
    .then(() => {
        // g
        // nota average of all students
        models.estudiantes.find({})
        .then(estudiantes => {
            let notaTotal = 0;
            estudiantes.forEach(estudiante => {
                notaTotal += estudiante.nota;
            })
            console.log("g");
            console.log("Nota media: ", notaTotal / estudiantes.length);
            return
        })
        return
    })
    .then(() => {
        // h
        // nota average of students with course 1A
        models.estudiantes.find({ curso: "1A" })
        .then(estudiantes => {
            let notaTotal = 0;
            estudiantes.forEach(estudiante => {
                notaTotal += estudiante.nota;
            })
            console.log("h");
            console.log("Nota media de estudiantes del curso 1A: ", notaTotal / estudiantes.length);
            return
        })
        return
    })
    .catch(err => {
        console.log("Error: ", err);
        return
    })
    return
})