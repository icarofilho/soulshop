import ValePresente from "../models/ValePresente";
import Mensagem from "../models/Mensagem";

class ValePresenteController {
    static async mainPage(_, res) {
        res.render("valepresente");
    }
    static async voucher(req, res) {
        const { id } = req.params;
        const vale = await ValePresente.findById(id).lean();
        res.render("vale", { vale, id: id });
    }

    static async checkOut(req, res) {
        const { sender, receiver, message, emailSender, emailReceiver } =
            req.body;
        const { id } = req.params;
        const vale = await ValePresente.findById(id).lean();

        res.render("checkout", {vale, id: id, sender, receiver, message, emailSender, emailReceiver });
    }

    static async finalizaCompra(req, res) {
        const { sender, emailSender } = req.body
        const { id } = req.params;
        const vale = await ValePresente.findById(id).lean();
        res.render("compra_vale", {vale, id: id, sender, emailSender} )
    }
}

module.exports = ValePresenteController;
