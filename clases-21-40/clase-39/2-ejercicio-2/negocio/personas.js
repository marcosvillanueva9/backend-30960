import model from '../model/personas.js'

/* -------------------------------------- */
/*             HTML ON WIRE               */
/* -------------------------------------- */
export const obtenerPersonas = async () => {
    return await model.obtenerPersonas();
}

export const agregarPersona = async (persona) => {
    await model.agregarPersona(persona);
}