import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RecognizedObject, RecognizedObjectDocument } from './schemas/recognizedObjects.schema';
import { Model } from 'mongoose';
import { CreateRecognizedObjectDto } from './dto/create-recognizedObjects.dto';
import { DeviceObject, DeviceObjectDocument } from './schemas/device.entity';


@Injectable()
export class MqttService {
  
  constructor(
    @InjectModel(DeviceObject.name) private readonly deviceObjectModel: Model<DeviceObject>
  ) {}  
  
  async findOne(token: string): Promise<any> {
    if ((await this.deviceObjectModel.findOne({ token: token }))){
      return true;
    }else{
      return false;
    }
  }
}
