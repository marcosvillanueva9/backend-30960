import model from '../model/personas.js'
import PrimeraConexion from './singleton.js';

/* -------------------------------------- */
/*             HTML ON WIRE               */
/* -------------------------------------- */
export const obtenerPersonas = async () => {
    return await model.obtenerPersonas();
}

export const agregarPersona = async (persona) => {
    await model.agregarPersona(persona);
}

/* -------------------------------------- */
/*             SINGLETON                  */
/* -------------------------------------- */

export const obtenerHora = async (req, res) => {
    return new PrimeraConexion().obtenerHora();
}