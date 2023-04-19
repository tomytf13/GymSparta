import { IsIn, IsNotEmpty, IsString } from "class-validator"
import { TipoDeEntrenamiento, TipoDePago } from "../pago.entity"
import { Socio } from "src/socio/socio.entity"

export class CreatePagoDTO {

    id: string

    @IsNotEmpty()
    socio: Socio
    @IsString()
    @IsIn([TipoDeEntrenamiento.APARATOS,TipoDeEntrenamiento.CALISTENIA,TipoDeEntrenamiento.FUNCIONAL])
    tipoEntrenamiento: TipoDeEntrenamiento
    @IsString()
    @IsIn([TipoDePago.CLASE,TipoDePago.MENSUAL])
    tipoPago: TipoDePago
    @IsString()
    @IsNotEmpty()
    monto: string
    @IsString()
    @IsNotEmpty()
    cuotas: string
    vencimiento: Date
    fechaPago:Date

}