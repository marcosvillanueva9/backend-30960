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

/* -------------------------------------- */
/*             DATA ON WIRE               */
/* -------------------------------------- */
export const getDataOnwire = async (req, res) => {
    res.sendFile(process.cwd() + '/views/plantilla-data-onwire.html');
}

export const postDataOnwire = async (req, res) => {
    let persona = req.body;
    await negocio.agregarPersona(persona);
    res.json({persona});
}

export const getJSON = async (req, res) => {
    res.json({ personas: await negocio.obtenerPersonas()});
}

/* -------------------------------------- */
/*             SINGLETON                  */
/* -------------------------------------- */

export const obtenerHora = async (req, res) => {
    res.json({ fyh: await negocio.obtenerHora()});
}