import { PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateDatapointDto } from './create-datapoint.dto';

export class UpdateDatapointDto extends PartialType(CreateDatapointDto) {
    @IsNumber()
    readonly datapointID: number;
}
