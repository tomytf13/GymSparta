import { Schema } from "mongoose";

export const PagoSchema = new Schema({
    id: String,
    idSocio: String,
    tipoEntrenamiento: String,
    tipoPago: String,
    monto: String,
    createAt:{
        type:Date,
        default: Date.now
    },
})