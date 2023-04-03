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

async getPagoByIdSocio( id: string): Promise<PagoInterface>{
    
    const pagos = await this.pagoModel.find()
    const resultados= pagos.filter(item=>item.idSocio===id)
    return resultados[resultados.length-1];
}




}
