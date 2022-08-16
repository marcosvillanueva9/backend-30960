import services from '../negocio/operaciones.js';

const suma = async (req, res) => {
    let {a, b} = req.query;

    // aca no hay logica, se delega a la capa de servicios entonces:
    let resultado = await services.sumar(Number(a), Number(b))

    res.send(`La suma de ${a} y ${b} es ${resultado}`);
}

const resta = async (req, res) => {
    let {a, b} = req.query;

    // aca no hay logica, se delega a la capa de servicios entonces:
    let resultado = await services.restar(Number(a), Number(b))

    res.send(`La resta de ${a} y ${b} es ${resultado}`);
}

const multiplicacion = async (req, res) => {
    let {a, b} = req.query;

    // aca no hay logica, se delega a la capa de servicios entonces:
    let resultado = await services.multiplicar(Number(a), Number(b))

    res.send(`La multiplicacion de ${a} y ${b} es ${resultado}`);
}

const division = async (req, res) => {
    let {a, b} = req.query;

    // aca no hay logica, se delega a la capa de servicios entonces:
    let resultado = await services.dividir(Number(a), Number(b))

    res.send(`La division de ${a} y ${b} es ${resultado}`);
}

const listarTodos = async (req, res) => {

    // aca no hay logica, se delega a la capa de servicios entonces:
    let resultado = await services.listar()

    res.send(`La lista es ${resultado}`);
}

export default {
    suma,
    resta,
    multiplicacion,
    division,
    listarTodos
}