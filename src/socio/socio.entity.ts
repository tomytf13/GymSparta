import { Transform } from "class-transformer"

export enum SocioEstado{
    ACTIVO = "ACTIVO",
    INACTIVO = "INACTIVO"
}

export class Socio{
    id:string
    nombre: string
    apellido: string
    hotmail: string
    edad: string
    domicilio: string
    fechaNacimiento: string
    dni: string
    celular: string
    telFijo:string
    estado: SocioEstado
}