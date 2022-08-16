import { suma, resta, multiplicacion, division } from "mvillanueva9-basics";
import persistencia from '../persistencia/operaciones.js';

async function sumar(a, b) {
    let r = suma(a, b);
    await persistencia.guardar({
        tipo: 'suma',
        params: [a, b],
        resultado: r,
        timestamp: Date.now()
    });
    return r;
}

async function restar(a, b) {
    let r = resta(a, b);
    await persistencia.guardar({
        tipo: 'resta',
        params: [a, b],
        resultado: r,
        timestamp: Date.now()
    });
    return r;
}

async function multiplicar(a, b) {
    let r = multiplicacion(a, b);
    await persistencia.guardar({
        tipo: 'multiplicacion',
        params: [a, b],
        resultado: r,
        timestamp: Date.now()
    });
    return r;
}

async function dividir(a, b) {
    if (b == 0) {
        throw new Error('No se puede dividir por 0');
    }

    let r = division(a, b);
    await persistencia.guardar({
        tipo: 'division',
        params: [a, b],
        resultado: r,
        timestamp: Date.now()
    });
    return r;
}

async function listar() {
    return await persistencia.listar();
}

export default {
    sumar,
    restar,
    multiplicar,
    dividir,
    listar
}