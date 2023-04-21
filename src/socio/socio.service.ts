import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ImageDTO } from "src/image/dto/image.dto";
import { ImageInterface } from "src/image/interfaces/image.interface";
import { CreateSocioDTO, UpdateSocioDTO } from "./dto/socio.dto";
import { SocioInterface } from "./interfaces/socio.interface";

@Injectable()
export class SocioService {

constructor(@InjectModel('Socio') private readonly socioModel: Model<SocioInterface>) { }


async getAllSocios(): Promise<SocioInterface[]> {
    const socios = await this.socioModel.find()
    return socios;
}

async getSocioById(id: string): Promise<SocioInterface> {
    const socio = await this.socioModel.findById(id)
    return socio;
}

async createSocio(createSocioDto: CreateSocioDTO): Promise<SocioInterface> {
    const socio = new this.socioModel(createSocioDto);
    return await socio.save();
}

async deleteSocio(id: string): Promise<SocioInterface> {
    const deletedSocio = this.socioModel.findByIdAndDelete(id)
    return deletedSocio;
}

async updateSocio(id: string, updatedFields: UpdateSocioDTO): Promise<SocioInterface> {
    const updatedSocio = await this.socioModel.findByIdAndUpdate(id, updatedFields,{new:true});
    return updatedSocio
}

async updateProfileImage(id: string, updatedFields: UpdateSocioDTO): Promise<SocioInterface> {
    const updatedSocio = await this.socioModel.findByIdAndUpdate(id, updatedFields,{new:true});
    return updatedSocio
}

}