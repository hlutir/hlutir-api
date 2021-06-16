import { PartialType } from '@nestjs/swagger';
import { CreateDatapointDto } from './create-datapoint.dto';

export class UpdateDatapointDto extends PartialType(CreateDatapointDto) {}
