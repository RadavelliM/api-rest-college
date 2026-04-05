import { Router } from "express";
import NotaController from "../controllers/NotaController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// rotas sem necessidade de login
router.get("/", NotaController.index);
router.get("/:id", NotaController.show);

// rotas com necessidade de login
router.post("/", loginRequired, NotaController.create);
router.put("/:id", loginRequired, NotaController.update);
router.delete("/:id", loginRequired, NotaController.delete);

export default router;
