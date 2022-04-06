function CartaPresentacion(nombre, apellido, edad, tipoTrabajo, nombreTrabajo) {
    return function () {
        console.log(`Hola, mi nombre es ${nombre} ${apellido}, tengo ${edad} años de edad.
    Actualmente trabajo como ${tipoTrabajo} en ${nombreTrabajo}`)
    }
}

CartaPresentacion("Marcos", "Villanueva", 23, "Profesor", "CoderHouse")

// Que va a imprimer esto? Pregunta engañosa