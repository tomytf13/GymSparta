import { Schema } from "mongoose";

export const SocioSchema = new Schema({
    id: String,
    nombre: String,
    apellido: String,
    hotmail: String,
    edad: String,
    domicilio: String,
    fechaNacimiento: String,
    dni: String,
    celular: String,
    telFijo:String,
    estado: String,
    createAt:{
        type:Date,
        default: Date.now
    },
    profileImage:String
})