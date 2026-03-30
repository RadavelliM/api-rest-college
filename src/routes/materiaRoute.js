import { Router } from "express";
import MateriaController from '../controllers/MateriaController'
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// rotas sem necessidade de login
router.get("/", MateriaController.index);
router.get("/:id", MateriaController.show);

// rotas com necessidade de login
router.post("/", loginRequired, MateriaController.create);
router.put("/:id", loginRequired, MateriaController.update);
router.delete("/:id", loginRequired, MateriaController.delete);

export default router;
