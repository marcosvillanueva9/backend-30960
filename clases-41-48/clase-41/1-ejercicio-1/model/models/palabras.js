import Joi from 'joi'

class Palabras {

    constructor(palabra) {
        this.palabra = palabra
    }

    static validar(palabra, required) {
        const PalabraSchema = Joi.object({
            palabra: required? Joi.string().required() : Joi.String()
        })

        const  { error } = PalabraSchema.validate(palabra)
        if ( error ) {
            throw error
        }
    }
}

export default Palabras