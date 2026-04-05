import { Router } from "express";
import MatriculaController from "../controllers/MatriculaController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// rotas sem necessidade de login
router.get("/", MatriculaController.index);
router.get("/:id", MatriculaController.show);

// rotas com necessidade de login
router.post("/", loginRequired, MatriculaController.create);
router.put("/:id", loginRequired, MatriculaController.update);
router.delete("/:id", loginRequired, MatriculaController.delete);

export default router;
