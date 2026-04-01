import { Router } from "express";
import AtribuicaoController from '../controllers/AtribuicaoController'
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// rotas sem necessidade de login
router.get("/", AtribuicaoController.index);
router.get("/:id", AtribuicaoController.show);

// rotas com necessidade de login
router.post("/", loginRequired, AtribuicaoController.create);
router.put("/:id", loginRequired, AtribuicaoController.update);
router.delete("/:id", loginRequired, AtribuicaoController.delete);

export default router;
