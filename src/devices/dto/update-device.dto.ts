import { PartialType } from '@nestjs/swagger';
import { CreateDeviceDto } from './create-device.dto';
import { IsNumber } from "class-validator";

export class UpdateDeviceDto extends PartialType(CreateDeviceDto) {
    @IsNumber()
    readonly deviceID: number;
}
