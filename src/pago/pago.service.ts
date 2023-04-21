import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePagoDTO } from "./dto/pago.dto";
import { PagoInterface } from "./interfaces/pago.interface";
import { Pago } from "./pago.entity";

@Injectable()
export class PagoService {

constructor(@InjectModel('Pago') private pagoModel: Model<PagoInterface>) { }


async getAllPagos(): Promise<PagoInterface[]> {
    const pagos = await this.pagoModel.find()
    return pagos;
}

async createPago(createPagoDTO: CreatePagoDTO): Promise<PagoInterface> {
    const pago = new this.pagoModel(createPagoDTO);
    const newPago=calcularFecha(pago);
    return await newPago.save();
}

async getPagoByIdSocio( id: string): Promise<PagoInterface>{
    
    const pagos = await this.pagoModel.find()
    const resultados= pagos.filter(item=>item.socio.id===id)
    return resultados[resultados.length-1];
}

}
function calcularFecha(pago) {
    let fechaPago= new Date (pago.fechaPago)
    let cuotas= pago.cuotas
    pago.vencimiento=  new Date( fechaPago.getFullYear(),(fechaPago.getMonth()+parseInt(cuotas)),fechaPago.getDate())
    return pago
}
