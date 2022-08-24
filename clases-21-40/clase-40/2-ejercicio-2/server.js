import PersonasDaoFile from "./PersonasDaoFile.js";
//import PersonasDaoMem from "./PersonasDaoMem.js";

const generadorDeIds = {
    id: 1,
    next() { return this.id++ }
}

const personasDao = new PersonasDaoFile('./personas.txt')

console.log('______________________________')
console.log('1) Obtener todas las personas')
console.log(await personasDao.getAll())

console.log('______________________________')
console.log('2) Incorporar una persona')
const persona1 = { nombre: 'Anakin', apellido: 'Skywalker', dni: '10100100', id: generadorDeIds.next()}
console.log(await personasDao.save(persona1))

console.log('______________________________')
console.log('3) Obtener todas las personas')
console.log(await personasDao.getAll())

console.log('______________________________')
console.log('4) Incorporar una persona')
const persona2 = { nombre: 'Luke', apellido: 'Skywalker', dni: '20100100', id: generadorDeIds.next()}
console.log(await personasDao.save(persona2))

console.log('______________________________')
console.log('5) Obtener todas las personas')
console.log(await personasDao.getAll())

console.log('______________________________')
console.log('6) Obtener a Luke')
console.log(await personasDao.getById(persona2.id))

console.log('______________________________')
console.log('7) Actualizar a Luke')
console.log(await personasDao.updateById(persona2.id, { nombre: 'Lucas', apellido: 'Caminantedecielos', dni: '20100100'}))

console.log('______________________________')
console.log('8) Obtener todas las personas')
console.log(await personasDao.getAll())

console.log('______________________________')
console.log('9) Borrar a Anakin')
console.log(await personasDao.deleteById(persona1.id))

console.log('______________________________')
console.log('10) Obtener todas las personas')
console.log(await personasDao.getAll())