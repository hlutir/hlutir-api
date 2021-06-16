import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateDeviceTypeDto {
    @IsString()
    @ApiProperty({ example: 'ESP32', description: 'Name of the device type.' })
    readonly name: string;
}
