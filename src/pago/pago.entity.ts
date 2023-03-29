
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
    idSocio: string
    tipoEntrenamiento: TipoDeEntrenamiento
    tipoPago: TipoDePago
    monto: string
}