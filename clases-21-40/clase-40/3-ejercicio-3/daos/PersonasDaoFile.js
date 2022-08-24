import fs from 'fs'
import { transformarADTO } from '../dtos/PersonaDTO.js'

export default class PersonasDaoFile {

    ready = false

    constructor(ruta) {
        this.ruta = ruta
        this.personas = []
    }

    async init() {
        try {
            await fs.promises.readFile(this.ruta, 'utf-8')
            this.ready = true
            console.log('personas dao en archivo -> listo!')
        } catch {
            await fs.promises.writeFile(this.ruta, '[]')
            this.ready = true
            console.log('personas dao en archivo -> listo!')
        }
    }

    async disconnect() {
        console.log('personas dao en archivo -> cerrado!')
    }

    async leerArchivo() {
        const texto = await fs.promises.readFile(this.ruta, 'utf-8')
        this.personas = JSON.parse(texto)
    }

    async escribirArchivo() {
        const texto = JSON.stringify(this.personas, null, 2)
        await fs.promises.writeFile(this.ruta, texto)
    }

    getIndex(id) {
        return this.personas.findIndex(persona => persona.id === id)
    }

    async getAll() {
        await this.leerArchivo()
        return transformarADTO(this.personas)
    }

    async getById(id) {
        await this.leerArchivo()
        return transformarADTO(this.personas[this.getIndex(id)])
    }

    async save(personaNueva) {
        await this.leerArchivo()
        this.personas.push(personaNueva)
        await this.escribirArchivo()
        return transformarADTO(personaNueva)
    }

    async deleteById(id) {
        await this.leerArchivo()
        const [ borrada ] = this.personas.splice(this.getIndex(id), 1)
        await this.escribirArchivo()
        return transformarADTO(borrada)
    }

    async deleteAll() {
        this.personas = []
        await this.escribirArchivo()
    }

    async updateById(id, nuevo) {
        await this.leerArchivo()
        const index = this.getIndex(id)
        const actualizado = { ...this.personas[index], ...nuevo}
        this.personas.splice(index, 1, actualizado)
        await this.escribirArchivo()
        return transformarADTO(actualizado)
    }
}