import {Schema} from 'mongoose'


export const TaskSchema = new Schema({
    id: String,
    title: String,
    description: String,
    status: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});