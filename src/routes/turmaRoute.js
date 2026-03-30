import { Router } from "express";
import TurmasController from '../controllers/TurmasController'
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// rotas sem necessidade de login
router.get("/", TurmasController.index);
router.get("/:id", TurmasController.show);

// rotas com necessidade de login
router.post("/", loginRequired, TurmasController.create);
router.put("/:id", loginRequired, TurmasController.update);
router.delete("/:id", loginRequired, TurmasController.delete);

export default router;
