import { Document } from "mongoose";

export interface ImageInterface extends Document{
    idSocio:String
    image: String
}