import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { get } from "http";
import { CreatePagoDTO } from "./dto/pago.dto";
import { PagoService } from "./pago.service";


@Controller('pago')
export class PagoController {
    constructor(private pagoService: PagoService) { }


    @Get()
    async getAllPagos() {
        return await this.pagoService.getAllPagos()
    }

    @Post()
    async createPago(@Res() res, @Body() newPago: CreatePagoDTO) {
        const pago = await this.pagoService.createPago(newPago)
        return res.status(HttpStatus.OK).json({
            message: "Pago realizado con exito!",
            pago: pago
        })
    }

    @Get(':id')
    async getPago(@Res() res,@Param('id') idSocio:string){
        const pago = await this.pagoService.getPagoByIdSocio(idSocio)
        if (pago===undefined) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'No se encontro un pago para el socio: '+idSocio
            })
        }
        else{
            return res.status(HttpStatus.OK).json({
                pago: pago
            })
        }
     
    }




}
