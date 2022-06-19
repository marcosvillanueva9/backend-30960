import express from 'express';
import ApiUsuariosMock from '../api/usuarios.js';

class UsuariosRouter extends express.Router {
    constructor() {
        super()

        const apiUsuarios = new ApiUsuariosMock();

        this.post('/popular', async (req, res, next) => {
            try {
                res.json(await apiUsuarios.popular(Number(req.query.cant)));
            } catch (error) {
                next(error);
            }
        })
        this.get('/', async (req, res, next) => {
            try {
                res.json(await apiUsuarios.listarTodos());
            } catch (error) {
                next(error);
            }
        })
        this.get('/:id', async (req, res, next) => {
            try {
                res.json(await apiUsuarios.listar(req.params.id));
            } catch (error) {
                next(error);
            }
        })
        this.post('/', async (req, res, next) => {
            try {
                res.json(await apiUsuarios.guardar(req.body));
            } catch (error) {
                next(error);
            }
        })
        this.put('/:id', async (req, res, next) => {
            try {
                res.json(await apiUsuarios.actualizar({...req.body, id: req.params.id}));
            } catch (error) {
                next(error);
            }
        })
        this.delete('/:id', async (req, res, next) => {
            try {
                res.json(await apiUsuarios.borrar(req.params.id));
            } catch (error) {
                next(error);
            }
        })
    }
}

export default UsuariosRouter;