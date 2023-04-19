import { Document } from "mongoose";
import { TipoDeEntrenamiento, TipoDePago } from "../pago.entity";


export interface PagoInterface extends Document{
    id: String,
    idSocio: String,
    tipoEntrenamiento: TipoDeEntrenamiento,
    tipoPago: TipoDePago,
    monto: String,
    cuotas: String,
    vencimiento: Date,
    fechaPago: Date
}

