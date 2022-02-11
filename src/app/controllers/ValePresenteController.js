import ValePresente from "../models/ValePresente";

class ValePresenteController {
    static async mainPage(_, res) {
        res.render("valepresente");
    }
    static async voucher(_, res) {
        res.render("vale");
    }
}

module.exports = ValePresenteController;
