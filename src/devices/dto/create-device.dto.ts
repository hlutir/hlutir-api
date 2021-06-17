import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class CreateDeviceDto {
    @IsString()
    @ApiProperty({
        example: 'Weather Station 01',
        description: 'Name of the device.',
        required: true
    })
    readonly name: string;

    @IsString()
    @ApiProperty({
        example: 'This is weather station 01.',
        description: 'A short description of the device.',
        required: false
    })
    readonly description?: string;

    @IsString()
    @ApiProperty({
        example: 'WS01',
        description: 'An identifier for this device.',
        required: false
    })
    readonly identifier?: string;

    @IsNumber()
    @ApiProperty({
        example: 4,
        description: 'Device type ID',
        required: true
    })
    readonly deviceTypeID: number;
}
