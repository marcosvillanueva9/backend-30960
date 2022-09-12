'use strict'

class PalabraController {
    index({ request, response, view}) {
    const { palabras } = request.get()
    let arrayPalabras = palabras.split(' ')
    let arrayPalabrasInv = [...arrayPalabras].reverse()
    response.send(view.render('Palabras', {titulo: 'Proceso con controller', arrayPalabras, arrayPalabrasInv}))
    }
}

module.exports = PalabraController
