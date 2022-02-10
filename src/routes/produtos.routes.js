import { Router } from "express";
import ProdutoController from "../app/controllers/ProdutoController"

const router = Router();

router.get("/produtos", ProdutoController.paginaProdutos);
router.get("/produtos/novo", ProdutoController.paginaAdicionarProduto);
router.post("/produtos/enviar", ProdutoController.addProduto);
router.get("/produtos/editar/:id", ProdutoController.paginaEditProduto);
router.post("/produtos/atualizar", ProdutoController.editProduto);
router.post("/produtos/deletar", ProdutoController.deleteProduto);

module.exports = router;
