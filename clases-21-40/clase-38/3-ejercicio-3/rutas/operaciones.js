import { Router } from "express";
import controllers from "../controlador/operaciones.js";
import { auth } from "./middleware/auth.js";

const router = Router();

router.get('/suma', controllers.suma)

router.get('/resta', controllers.resta)

router.get('/multiplicacion', controllers.multiplicacion)

router.get('/division', controllers.division)

router.get('/listar', auth ,controllers.listarTodos)

export default router;