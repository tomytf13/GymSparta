import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"
import { SocioEstado } from "../socio.entity"


export class CreateSocioDTO{

    id:string

    @IsString()
    @IsNotEmpty()
    nombre: string

    @IsString()
    @IsNotEmpty()
    apellido: string

    @IsString()
    @IsOptional()
    hotmail: string

    @IsString()
    @IsNotEmpty()
    edad: string
    
    @IsString()
    @IsNotEmpty()
    domicilio:string

    @IsString()
    @IsNotEmpty()
    fechaNacimiento: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    dni: string

    @IsString()
    @IsOptional()
    celular: string

    @IsString()
    @IsOptional()
    telFijo:string
    
    @IsString()
    @IsOptional()
    estado:string

    image:string

}

export class UpdateSocioDTO{

    @IsString()
    @IsNotEmpty()
    nombre: string

    @IsString()
    @IsNotEmpty()
    apellido: string

    @IsString()
    @IsOptional()
    hotmail: string

    @IsString()
    @IsNotEmpty()
    edad: string

    @IsString()
    @IsNotEmpty()
    domicilio:string

    @IsString()
    @IsNotEmpty()
    fechaNacimiento: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    dni: string

    @IsString()
    @IsOptional()
    celular: string

    @IsString()
    @IsOptional()
    telFijo:string

    @IsString()
    @IsOptional()
    @IsIn([SocioEstado.ACTIVO,SocioEstado.INACTIVO])
    status: SocioEstado

}

