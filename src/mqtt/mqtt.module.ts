import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MqttController } from './mqtt.controller';
import { MqttService } from './mqtt.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RecognizedObject, RecognizedObjectSchema } from './schemas/recognizedObjects.schema';
import { DeviceObject, DeviceObjectSchema } from './schemas/device.entity';

@Module({
  imports: [HttpModule,
    ClientsModule.register([
      {
        name: 'MQTT_SERVICE',
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://localhost:1883',
          username: 'gmoralesdd',
          password: 'gmoralesdd'
        }
      },
    ]), 
    MongooseModule.forFeature([{ name: DeviceObject.name, schema: DeviceObjectSchema }])],
  controllers: [MqttController],
  providers: [MqttService],

})
export class MqttModule {}
