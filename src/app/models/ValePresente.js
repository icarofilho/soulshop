import { model, Schema } from "mongoose";

const ValePresente = model(
    "ValePresente",
    new Schema({
        title: { type: String, required: true },
        price: { type: Number, required: true },
        img_url: { type: String, required: true },
        desc: { type: String, required: true },
    })
);

module.exports = ValePresente;
