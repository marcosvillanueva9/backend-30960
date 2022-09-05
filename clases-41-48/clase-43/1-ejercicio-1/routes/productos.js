var express = require('express')
var router = express.Router()
var debug = require('debug')('myapp:productos')

const productos = []

function makeRandomId() {
    const nums = []
    for (let i = 0; i < 8; i++) {
        nums.push(Math.floor(10 * Math.random()))
    }
    return `${Date.now()}-${nums.join('')}`
}

router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res, next) => {
    debug('Listening on ' + JSON.stringify(productos))
    res.json(productos)
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    const producto = productos.find(p => p.id == id)
    res.json(producto)
})

/* POST productos listing. */
router.post('/', function (req, res, next) {
    const { nombre, precio } = req.body
    const producto = { id: makeRandomId(), nombre, precio: Number(precio) }
    productos.push(producto)
    res.status(201).json(producto)
  });

/* PUT productos listing. */
router.put('/:id', function (req, res, next) {
    const id = req.params.id
    const { nombre, precio } = req.body
    const producto = { id, nombre, precio: Number(precio) }

    const index = productos.findIndex(p => p.id == id)
    if (index == -1) {
        return res.sendStatus(404)
    }
    productos.splice(index, 1, producto)
    res.json(producto)
});

/* DELETE productos listing. */
router.delete('/:id', function (req, res, next) {
    const id = req.params.id
    const index = productos.findIndex(p => p.id == id)
    if (index == -1) {
        return res.sendStatus(404)
    }
    productos.splice(index, 1)
    res.sendStatus(204)
});

module.exports = router;
