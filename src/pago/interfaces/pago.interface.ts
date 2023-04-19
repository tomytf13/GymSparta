import { Document } from "mongoose";
import { TipoDeEntrenamiento, TipoDePago } from "../pago.entity";
import { Socio } from "src/socio/socio.entity";


export interface PagoInterface extends Document{
    id: String,
    socio: Socio,
    tipoEntrenamiento: TipoDeEntrenamiento,
    tipoPago: TipoDePago,
    monto: String,
    cuotas: String,
    vencimiento: Date,
    fechaPago: Date
}

