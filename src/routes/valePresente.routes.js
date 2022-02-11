import { Router } from "express";
import ValePresenteController from "../app/controllers/ValePresenteController";

const router = Router();

router.get("/vale", ValePresenteController.mainPage);
router.get("/vale/:id", ValePresenteController.voucher);


module.exports = router;
