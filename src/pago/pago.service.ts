import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePagoDTO } from "./dto/pago.dto";
import { PagoInterface } from "./interfaces/pago.interface";

@Injectable()
export class PagoService {

constructor(@InjectModel('Pago') private pagoModel: Model<PagoInterface>) { }


async getAllPagos(): Promise<PagoInterface[]> {
    const pagos = await this.pagoModel.find()
    return pagos;
}

async createPago(createPagoDTO: CreatePagoDTO): Promise<PagoInterface> {
    const pago = new this.pagoModel(createPagoDTO);
    return await pago.save();
}


}