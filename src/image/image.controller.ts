import { Body, Controller, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { ImageDTO } from "./dto/image.dto";
import { ImageService } from "./image.service";

@Controller('image')
export class ImageController {
    constructor(private imageService: ImageService) { }

    @Post('upload/:id')
    @UseInterceptors(FileInterceptor('file',
    {
        storage: diskStorage({
            destination:'./uploads',
            filename: function(req,file,cb)
            {
                cb(null,file.originalname + '_' + Date.now()+'.jpeg');
            }
        })
    }
    ))
    async uploadFile(@UploadedFile() file: Express.Multer.File,@Param(':id') idSocio: string) {
        const asociacion = await this.imageService.uploadImage(file.originalname,idSocio)
        return {
            msg: `Archivo ${file.filename} cargado correctamente!`,
            asociacion: asociacion
        }
    }

    

   

}
