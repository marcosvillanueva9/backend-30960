import mongoose from 'mongoose'
import { transformarADTO } from '../dtos/PersonaDTO.js'

const personasSchema = new mongoose.Schema({
    id: {type: Number},
    nombre: {type: String},
    apellido: {type: String},
    dni: {type: String}
})

export default class PersonasDaoDb {
    constructor(connString) {
        this.connString = connString
        this.personas = mongoose.model('Persona', personasSchema)
    }

    async init() {
        await mongoose.connect(this.connString)
        console.log('personas dao en mongodb -> listo!')
    }

    async disconnect() {
        await mongoose.disconnect()
        console.log('personas dao en mongodb -> cerrado!')
    }

    async getAll() {
        const personas = await this.personas.find({})
        return transformarADTO(personas)
    }

    async getById(id) {
        const persona = await this.personas.findOne({id: id})
        return transformarADTO(persona)
    }

    async save(personaNueva) {
        await this.personas.create(personaNueva)
        return transformarADTO(personaNueva)
    }

    async deleteById(id) {
        const borrada = await this.personas.findOneAndDelete({id: id})
        return transformarADTO(borrada)
    }

    async deleteAll() {
        await this.personas.deleteMany({})
    }

    async updateById(id, nuevo) {
        const actualizado = await this.personas.findOneAndUpdate({id: id}, { $set: nuevo})
        return transformarADTO(actualizado)
    }
}