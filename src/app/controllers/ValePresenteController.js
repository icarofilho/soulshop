import ValePresente from "../models/ValePresente";

class ValePresenteController {
    static async mainPage(_, res) {
        res.render("valepresente");
    }
    static async voucher(req, res) {
        const { id } = req.params;
        const vale = await ValePresente.findById(id).lean();
        console.log('id=>',id)
        console.log('obj => ',vale)
        res.render("vale", { vale : vale });
    }
}

module.exports = ValePresenteController;
