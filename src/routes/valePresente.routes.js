import { Router } from "express";
import ValePresenteController from "../app/controllers/ValePresenteController";

const router = Router();

router.get("/vale", ValePresenteController.mainPage);
router.get("/vale/novo", ValePresenteController.paginaAdicionarVale);
router.post("/vale/atualizar", ValePresenteController.editVale);
router.post("/vale/enviar", ValePresenteController.addVale);
router.post("/vale/deletar", ValePresenteController.deleteVale);
router.get("/vale/:id", ValePresenteController.voucher);
router.post("/vale/:id/checkout", ValePresenteController.checkOut);
router.post("/vale/:id/checkout/compra_vale", ValePresenteController.finalizaCompra);


module.exports = router;
