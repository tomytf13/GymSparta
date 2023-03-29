import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
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
            socio: pago
        })
    }




}
