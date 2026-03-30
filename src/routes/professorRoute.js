import { Router } from "express";
import ProfessorController from '../controllers/ProfessorController'
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// rotas sem necessidade de login
router.get("/", ProfessorController.index);
router.get("/:id", ProfessorController.show);

// rotas com necessidade de login
router.post("/", loginRequired, ProfessorController.create);
router.put("/:id", loginRequired, ProfessorController.update);
router.delete("/:id", loginRequired, ProfessorController.delete);

export default router;
