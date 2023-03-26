import { ObjectDetected } from '../schemas/objectDetected.schema';

export class CreateRecognizedObjectDto {
  readonly id_estacion: string;

  readonly timestamp: string;

  readonly objectsDetected: ObjectDetected[];

  readonly token: string;

}
