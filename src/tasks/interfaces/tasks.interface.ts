import { Document } from "mongoose"


export interface TaskInterface extends Document {
    id:String,
    title: String,
    description: String,
    status: String
}