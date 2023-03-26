import { Controller, HttpService, Inject, Get, Post, Body } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from '../app.service';
import { MqttService } from './mqtt.service';
import { CreateRecognizedObjectDto } from './dto/create-recognizedObjects.dto';

@Controller('recognizedObjects')
export class MqttController {
    constructor(
        @Inject('MQTT_SERVICE') private client: ClientProxy,
        private readonly mqttService: MqttService
    ) {}

    @Post()
    async getNotifications(@Body() createRecognizedObjectDto: CreateRecognizedObjectDto){
        console.log(`cEntro en post`)
        console.log(`Token ${createRecognizedObjectDto.token}`)
        if(await this.mqttService.findOne(createRecognizedObjectDto.token)){           
            console.log(`cEncontrado ${createRecognizedObjectDto.token}`)
            this.client.emit('python/mqtt', createRecognizedObjectDto)
        }
    }    
}