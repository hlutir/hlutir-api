import { PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateSensorDto } from './create-sensor.dto';

export class UpdateSensorDto extends PartialType(CreateSensorDto) {
    @IsNumber()
    readonly sensorID: number;
}
