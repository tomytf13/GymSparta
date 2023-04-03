import { IsIn, IsNotEmpty, IsString } from "class-validator"
import { TipoDeEntrenamiento, TipoDePago } from "../pago.entity"

export class CreatePagoDTO {

    id: string

    @IsString()
    @IsNotEmpty()
    idSocio: string
    @IsString()
    @IsIn([TipoDeEntrenamiento.APARATOS,TipoDeEntrenamiento.CALISTENIA,TipoDeEntrenamiento.FUNCIONAL])
    tipoEntrenamiento: TipoDeEntrenamiento
    @IsString()
    @IsIn([TipoDePago.CLASE,TipoDePago.MENSUAL])
    tipoPago: TipoDePago
    @IsString()
    @IsNotEmpty()
    monto: string

    vencimiento: Date

}