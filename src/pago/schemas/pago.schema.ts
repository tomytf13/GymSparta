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
    vencimiento:{
        type:Date,
        default: new Date( new Date().getFullYear(),(new Date().getMonth()+1),new Date().getDate())
    },
})