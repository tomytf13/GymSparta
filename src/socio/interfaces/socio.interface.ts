import { Document } from "mongoose";


export interface SocioInterface extends Document{
    id: String,
    nombre: String,
    apellido: String,
    hotmail: String,
    edad: String,
    domicilio: string
    fechaNacimiento: string
    dni: String,
    celular: String,
    telFijo:String,
    estado: String,
    profileImage:String
}

