import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PagoController } from './pago.controller';
import { PagoService } from './pago.service';
import { PagoSchema } from './schemas/pago.schema';
@Module({
    
    imports:[
        MongooseModule.forFeature([
            {name:'Pago', schema:PagoSchema}
        ])
    ],
    controllers: [PagoController],
    providers:[PagoService]
})
export class PagoModule {

}
