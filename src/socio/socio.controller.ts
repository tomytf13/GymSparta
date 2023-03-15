import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateSocioDTO, UpdateSocioDTO } from './dto/socio.dto';
import { SocioService } from './socio.service';

@Controller('socio')
export class SocioController {
    constructor(private socioService: SocioService){}

    @Get()
    async getAllSocios() {
        return  await this.socioService.getAllSocios()
    }

    @Get(':id')
    async getSocio(@Param('id') id: string) {
        return  await this.socioService.getSocioById(id)
    }

    @Post()
    async createSocio(@Res() res,@Body() newSocio: CreateSocioDTO) {
        const socio = await this.socioService.createSocio(newSocio)
        return res.status(HttpStatus.OK).json({
            message: "Socio creado con exito!",
            socio: socio
        })
    }

    @Delete(':id')
    async deleteSocio(@Res() res,@Param('id') id: string) {
        const deletedSocio = await this.socioService.deleteSocio(id)
        return res.status(HttpStatus.OK).json({
            message: "Socio eliminado con exito!",
        })
    }

    @Put(':id')
    async updateSocio(@Res() res, @Param('id') id: string, @Body() updatedFields: UpdateSocioDTO) {
        const updatedSocio =  await this.socioService.updateSocio(id, updatedFields)
        return res.status(HttpStatus.OK).json({
            message: "Socio editado con exito!",
            socio: updatedSocio
        })

    }

}
