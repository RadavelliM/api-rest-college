import { Router } from "express";
import CursoController from '../controllers/CursoController'
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// rotas sem necessidade de login
router.get("/", CursoController.index);
router.get("/:id", CursoController.show);

// rotas com necessidade de login
router.post("/", loginRequired, CursoController.create);
router.put("/:id", loginRequired, CursoController.update);
router.delete("/:id", loginRequired, CursoController.delete);

export default router;
