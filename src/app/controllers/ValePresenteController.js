import ValePresente from "../models/ValePresente";
import Mensagem from "../models/Mensagem";

class ValePresenteController {
    static async mainPage(req, res) {
        let query = {}
        const { nomeVale } = req.query
        //filtrar o campo de busca pelo nome e ignorar (options: i) maiusculo e minusculo
        if(nomeVale) {
            query = {name: { $regex: `${nomeVale}`, $options: "i" }}
        }
         //lean dá uma simplificada no resultado do objeto
        const vales = await ValePresente.find(query).lean()
        res.render("valepresente", { vales, nomeVale });     
    }

    //renderizar página de adição
    static async paginaAdicionarVale(req, res) {
        console.log('paginaAdicionarVale')
        res.render("add_vale");
    }

    //método para adicionar de fato vale
    static async addVale(req, res) {
    //ler os dados do formulário
    const {title, price, img_url, desc} = req.body
    //cria o vale
    const vale= ValePresente({title, price, img_url, desc})
    //salva no atlas
    await vale.save();
    console.log('vale')
    //redirevionar a rota
    res.render("/vale");
}


    //método para adicionar de fato vale
    static async addVale(req, res) {
    //ler os dados do formulário
    const {title, price, img_url, desc} = req.body

    //cria o vale
    const vale= ValePresente({title, price, img_url, desc})
    //salva no atlas
    await vale.save();

    //redirevionar a rota
    res.redirect("/vale");
}

    //renderizar página de edição
    static async paginaEditVale(req, res) {
        const {id} = req.params
        const vale = await ValePresente.findById(id).lean()
        res.render("editar_vale", { vale })
    }
    
    //método para atualizar de fato o vale
    static async editVale(req, res) {
        const {id, name, price, img_url, description } = req.body
    
        await ValePresente.findByIdAndUpdate(id, {name, price, img_url, description})
    
        res.redirect("/vale");
    }

    //método para deletar
    static async deleteVale(req, res) {
        const { id } = req.body;
        await ValePresente.findByIdAndDelete(id)
        res.redirect("/vale")
    }

    static async voucher(req, res) {
        try{
            const { id } = req.params;
            const vale = await ValePresente.findById(id).lean();
            res.render("vale", { vale, id: id });
        } catch (error) {
            res.status(404).render("404");
        }
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
        console.log(sender)
        res.render("compra_vale", {vale, id: id, sender, emailSender} )
    }
}

module.exports = ValePresenteController;