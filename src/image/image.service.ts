import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ImageDTO } from "./dto/image.dto";
import { ImageInterface } from "./interfaces/image.interface";

@Injectable()
export class ImageService {

constructor(@InjectModel('Image') private  imageModel: Model<ImageInterface>) { }

async uploadImage(filename:string,idSocio:string): Promise<ImageInterface> {
    const updatedImage =  new this.imageModel(idSocio,filename);
    return await updatedImage.save();
}



}