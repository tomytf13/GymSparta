import { Schema } from "mongoose";
import { SocioSchema } from "src/socio/schemas/socio.schema";

export const PagoSchema = new Schema({
    id: String,
    socio: SocioSchema,
    tipoEntrenamiento: String,
    tipoPago: String,
    monto: String,
    cuotas: String,
    createAt:{
        type:Date,
        default: Date.now
    },
    fechaPago:{
        type:Date,
    },
    vencimiento:{
        type:Date,
        // default: new Date( new Date().getFullYear(),(new Date().getMonth()+1),new Date().getDate())
    },
})