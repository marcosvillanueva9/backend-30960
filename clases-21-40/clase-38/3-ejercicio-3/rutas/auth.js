import { Router } from "express";
import controllers from "../controlador/auth.js";

const router = Router();

router.get('/register', controllers.register)

export default router;