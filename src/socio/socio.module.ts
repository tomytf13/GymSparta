import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SocioSchema } from './schemas/socio.schema';
import { SocioController } from './socio.controller';
import { SocioService } from './socio.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            {name:'Socio', schema:SocioSchema}
        ])
    ],
    controllers: [SocioController],
    providers:[SocioService]
})
export class SocioModule {}
