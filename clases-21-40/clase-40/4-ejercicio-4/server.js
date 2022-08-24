import PersonasRepo from "./repos/PersonasRepo.js"
import Persona from "./modelos/Persona.js"
import PersonaMostrable from "./adaptadores/PersonaMostrable.js"


const generadorDeIds = {
    id: 1,
    next() { return this.id++ }
}

const personasRepo = new PersonasRepo()

console.log('______________________________')
console.log('1) Obtener todas las personas')
mostrar(await personasRepo.getAll())

console.log('______________________________')
console.log('2) Incorporar una persona')
const persona1 = new Persona({ nombre: 'Anakin', apellido: 'Skywalker', dni: '10100100', id: generadorDeIds.next()})
mostrar(await personasRepo.save(persona1))

console.log('______________________________')
console.log('3) Obtener todas las personas')
mostrar(await personasRepo.getAll())

console.log('______________________________')
console.log('4) Incorporar una persona')
const persona2 = new Persona({ nombre: 'Luke', apellido: 'Skywalker', dni: '20100100', id: generadorDeIds.next()})
mostrar(await personasRepo.save(persona2))

console.log('______________________________')
console.log('5) Obtener todas las personas')
mostrar(await personasRepo.getAll())

console.log('______________________________')
console.log('6) Obtener a Luke')
mostrar(await personasRepo.getById(persona2.id))

// console.log('______________________________')
// console.log('7) Actualizar a Luke')
// console.log(await personasRepo.updateById(persona2.id, { nombre: 'Lucas', apellido: 'Caminantedecielos', dni: '20100100'}))

console.log('______________________________')
console.log('8) Obtener todas las personas')
mostrar(await personasRepo.getAll())

console.log('______________________________')
console.log('9) Borrar a Anakin')
mostrar(await personasRepo.deleteById(persona1.id))

console.log('______________________________')
console.log('10) Obtener todas las personas')
mostrar(await personasRepo.getAll())

function mostrar(data) {
    if (Array.isArray(data)) {
        if (data.length > 0) {
            for (const persona of data) {
                console.log(new PersonaMostrable(persona).comoTexto())
            }
        } else {
            console.log('no hay datos para mostrar')
        }
    } else {
        console.log(new PersonaMostrable(data).comoTexto())
    }
}