import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateSensorDto {
    @IsNumber()
    @ApiProperty({
        example: 1,
        description: 'Device ID of the sensor.'
    })
    readonly deviceID: number;

    @IsString()
    @ApiProperty({
        example: 'Temperature',
        description: 'Name of the sensor.'
    })
    readonly name: string;

    @IsString()
    @ApiProperty({
        example: '°C',
        description: 'Unit of the sensor.'
    })
    readonly unit?: string;
}
