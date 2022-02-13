import { model, Schema } from "mongoose";

const Mensagem = model(
    "Mensagem",
    new Schema({
        Remetente: { type: String, required: true },
        emailRem: { type: String, required: true },
        destinatario: { type: String, required: true },
        emailDest: { type: String, required: true },
        mensagem: { type: String, required: true },
    })
);

module.exports = Mensagem;
