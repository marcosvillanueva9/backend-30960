import mongoose from "mongoose";
import * as models from "./models/estudiante.js";

CRUD()

async function CRUD() {

    try {
        const URL = "mongodb://localhost:27017/colegio";
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("Conexión a MongoDB correcta");

        // 1
        console.log("1");
        let rta = await models.estudiantes.updateOne({nombre: "Lucas", apellido: "Blanco"},
         {$set: {dni: "20355875"}})
        console.log(rta);

        // 2
        console.log("2");
        rta = await models.estudiantes.updateMany({}, {$set: {ingreso: false}})
        console.log(rta);

        // 3
        console.log("3");
        rta = await models.estudiantes.updateMany({curso: "1A"}, {$set: {ingreso: true}})
        console.log(rta);

        // 4
        console.log("4");
        rta = await models.estudiantes.find({nota: {$gte: 4}}, {_id: 0, __v: 0})
        console.log(rta);

        // 5
        console.log("5");
        rta = await models.estudiantes.find({ingreso: true}, {_id: 0, __v: 0})
        console.log(rta);

        // 6
        console.log("6");
        rta = await models.estudiantes.deleteMany({ingreso: true})
        console.log(rta);

        // 7
        console.log("7");
        let estudiantes = await models.estudiantes.find({}, {__v: 0})
        estudiantes.forEach(estudiante => {
            console.log(
                JSON.stringify(estudiante),
                '-> Fecha Creacion: ',
                new Date(estudiante._id.getTimestamp()).toLocaleString(),
            );
        })

    } catch (error) {
        console.log("Error al conectar a MongoDB");
    } finally {
        await mongoose.disconnect();
        console.log("Conexión a MongoDB finalizada");
    }
}