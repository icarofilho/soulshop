import { Router } from "express";
import produtosRoutes from "./produtos.routes";
import valeRoutes from "./valePresente.routes";

const router = Router();

router.get("/", (req, res) => res.render("home"));

router.use([produtosRoutes, valeRoutes]);

router.use((req, res, next) => res.render("404"));

module.exports = router;
