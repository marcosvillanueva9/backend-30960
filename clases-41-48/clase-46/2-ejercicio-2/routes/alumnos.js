const Router = require('koa-router')

const router = new Router({
    prefix: '/alumnos'
})

const alumnos = [
    { dni: 33456789, nombre: 'Juan Perez', materia: 'Fisica', nota: 6 },
    { dni: 35457683, nombre: 'Celia Gómez', materia: 'Matematicas', nota: 7 },
    { dni: 38683112, nombre: 'Cintia Fernández', materia: 'Fisica', nota: 4 },
    { dni: 34567209, nombre: 'Diego Mei', materia: 'Matematicas', nota: 8 },
]

router.get('/promedio', ctx => {
    const materia = ctx.request.query.materia

    let suma = 0
    const cant = alumnos
        .filter(alumno => alumno.materia == materia)
        .map(alumno => suma += alumno.nota)
        .length
    ctx.body = {
        promedio: cant ? suma/cant : 'No hay alumnos en esta materia'
    }
})


router.get('/', ctx => {
    ctx.body = { alumnos }
})

router.get('/:dni', ctx => {
    const alumno = alumnos.filter(alumno => alumno.dni == ctx.params.dni)
    if (!alumno.length) {
        ctx.response.status = 404
        ctx.body = {
            status: 'error',
            message: 'Alumno not found'
        }
        return
    }

    ctx.body = alumno[0]
})

router.post('/', ctx => {
    if (!ctx.request.body.dni ||
        !ctx.request.body.nombre ||
        !ctx.request.body.materia ||
        !ctx.request.body.nota) {
        ctx.response.status = 400
        ctx.body = {
            status: 'error',
            message: 'No se envio la totalidad de la informacion'
        }
        return
    }

    const newAlumno = {
        dni: ctx.request.body.dni,
        nombre: ctx.request.body.nombre,
        materia: ctx.request.body.materia,
        nota: ctx.request.body.nota
    }

    alumnos.push(newAlumno)
    ctx.response.status = 201
    ctx.body = {
        status: 'success',
        message: 'Alumno creado'
    }
})

router.put('/:dni', ctx => {
    if (!ctx.request.body.dni ||
        !ctx.request.body.nombre ||
        !ctx.request.body.materia ||
        !ctx.request.body.nota) {
        ctx.response.status = 400
        ctx.body = {
            status: 'error',
            message: 'No se envio la totalidad de la informacion'
        }
        return
    }

    const dni = ctx.params.dni

    const index = alumnos.findIndex(alumno => alumno.dni == dni)
    alumnos.splice(index, 1, ctx.request.body)
    ctx.response.status = 200
    ctx.body = {
        status: 'success',
        message: 'Alumno actualizado'
    }
})

router.delete('/:dni', ctx => {
    const dni = ctx.params.dni

    const index = alumnos.findIndex(alumno => alumno.dni == dni)
    alumnos.splice(index, 1)
    ctx.response.status = 200
    ctx.body = {
        status: 'success',
        message: 'Alumno eliminado'
    }
})

module.exports = router