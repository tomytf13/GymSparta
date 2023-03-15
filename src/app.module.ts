import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SocioModule } from './socio/socio.module';
@Module({
  imports: [TasksModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/task'),
    SocioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
