import { model, Schema } from "mongoose";

const User = model(
    "User",
    new Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        senha: { type: String, required: true },
        compras: { type: Array },
    })
);

module.exports = User;
