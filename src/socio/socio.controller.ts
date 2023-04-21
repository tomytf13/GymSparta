import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UseInterceptors } from '@nestjs/common';
import { UploadedFile } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path = require('path');
import { Observable, of } from 'rxjs';
import { ImageDTO } from 'src/image/dto/image.dto';
import { CreateSocioDTO, UpdateSocioDTO } from './dto/socio.dto';
import { SocioService } from './socio.service';
import { v4 as uuidv4 } from 'uuid';
import { Socio } from './socio.entity';

@Controller('socio')
export class SocioController {
    constructor(private socioService: SocioService) { }

    @Get() 
    async getAllSocios() {
        return await this.socioService.getAllSocios()
    }

    @Get(':id')
    async getSocio(@Param('id') id: string) {
        return await this.socioService.getSocioById(id)
    }

    @Post()
    
    async createSocio(@Res() res, @Body() newSocio: CreateSocioDTO) {
        const socio = await this.socioService.createSocio(newSocio)
        return res.status(HttpStatus.OK).json({
            message: "Socio creado con exito!",
            socio: socio
        })
    }
    // @Post(':id')
    // @UseInterceptors(FileInterceptor('file',{
    //     storage: diskStorage({
    //         destination: './uploads/profileImages',
    //         filename: (req,file,cb)=>{
    //             const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
    //             const extension: string = path.parse(file.originalname).ext;
    
    //             cb(null, `${filename}${extension}`)
    //         }
    //     })
    // }))
    // async uploadFile(@UploadedFile() file,@Param('id') id: string): Observable<UpdateSocioDTO>{
    //     const socio = await this.socioService.getSocioById(id)
    //     return this.socioService.updateSocio(id,{profileImage: file.filename}).pipe(tap((socio:Socio)=>console.log(socio);
    //     ))
    // }

    @Delete(':id')
    async deleteSocio(@Res() res, @Param('id') id: string) {
        const deletedSocio = await this.socioService.deleteSocio(id)
        return res.status(HttpStatus.OK).json({
            message: "Socio eliminado con exito!",
        })
    }

    @Put(':id')
    async updateSocio(@Res() res, @Param('id') id: string, @Body() updatedFields: UpdateSocioDTO) {
        const updatedSocio = await this.socioService.updateSocio(id, updatedFields)
        return res.status(HttpStatus.OK).json({
            message: "Socio editado con exito!",
            socio: updatedSocio
        })
    }




}
