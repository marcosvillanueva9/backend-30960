import PersonasDaoFactory from "../daos/PersonasDaoFactory.js";
import { transformarADTO } from "../dtos/PersonaDTO.js";
import Persona from "../modelos/Persona.js";

export default class PersonasRepo {
    dao

    constructor() {
        this.dao = PersonasDaoFactory.getDao()
    }

    async getAll() {
        const personas = await this.dao.getAll()
        return personas.map(p => new Persona(p))
    }

    async getById(id) {
        const persona = await this.dao.getById(id)
        return new Persona(persona)
    }

    async save(nuevo) {
        await this.dao.save(transformarADTO(nuevo))
        return nuevo
    } 

    async deleteById(id) {
        const removida = await this.dao.deleteById(id)
        return new Persona(removida)
    }

    async deleteAll() {
        await this.dao.deleteAll()
    }
}