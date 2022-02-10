import { Router } from "express";
import produtosRoutes from "./produtos.routes";

const router = Router();

router.get("/", (req, res) => res.render("home"));

router.use(produtosRoutes);

router.use((req, res, next) => res.render("404"));

module.exports = router;
