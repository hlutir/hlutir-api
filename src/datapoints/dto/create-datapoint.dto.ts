import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsDate } from "class-validator";

export class CreateDatapointDto {
    @IsNumber()
    @ApiProperty({
        example: 1,
        description: 'ID of the sensor.'
    })
    readonly sensorID: number;

    @IsDate()
    @ApiProperty({
        example: Date.now(),
        description: 'Timestamp that this datapoint has occurred.'
    })
    readonly timestamp: Date;

    @IsNumber()
    @ApiProperty({
        example: 34.86,
        description: 'Value of the datapoint.'
    })
    readonly value: number;
}
