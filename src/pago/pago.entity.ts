import { Socio } from "src/socio/socio.entity"

export enum TipoDeEntrenamiento{
    CALISTENIA = "CALISTENIA",
    APARATOS = "APARATOS",
    FUNCIONAL= "FUNCIONAL"
}


export enum TipoDePago{
    MENSUAL = "MENSUAL",
    CLASE = "CLASE"
}


export class Pago{
    id:string
    Socio: Socio
    tipoEntrenamiento: TipoDeEntrenamiento
    tipoPago: TipoDePago
    monto: string
    cuotas: string
    vencimiento: Date
    fechaPago:Date
}