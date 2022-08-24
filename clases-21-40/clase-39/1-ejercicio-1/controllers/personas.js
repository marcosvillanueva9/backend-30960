import * as negocio from '../negocio/personas.js';

/* -------------------------------------- */
/*             HTML ON WIRE               */
/* -------------------------------------- */
export const getHTMLOnwire = async (req, res) => {
    res.render('plantilla-html-onwire', { personas: await negocio.obtenerPersonas()});
}

export const postHTMLOnwire = async (req, res) => {
    let persona = req.body;
    await negocio.agregarPersona(persona);
    res.redirect('/html-onwire');
}