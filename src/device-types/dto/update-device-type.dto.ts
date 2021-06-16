import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDeviceTypeDto } from './create-device-type.dto';
import { IsNumber } from "class-validator";

export class UpdateDeviceTypeDto extends PartialType(CreateDeviceTypeDto) {
    @IsNumber()
    @ApiProperty({ example: 1, description: 'Internal device type ID.' })
    deviceTypeID: number;
}
