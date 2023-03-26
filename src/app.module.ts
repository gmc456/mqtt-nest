import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttModule } from './mqtt/mqtt.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MqttModule, HttpModule,
    MongooseModule.forRoot('mongodb://localhost:27017/devicesDB'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
