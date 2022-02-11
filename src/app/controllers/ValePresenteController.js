import ValePresente from "../models/ValePresente";

class ValePresenteController {
    static async mainPage(_, res) {
        res.render("valepresente");
    }
    static async voucher(req, res) {
        const { id } = req.params;
        const valepresente = await ValePresente.findOne({
            where: { id },
        });
        res.render("vale", { valepresente });
    }
}

module.exports = ValePresenteController;
