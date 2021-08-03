import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensorsService, ICreateSensorDto, ISensor, IUpdateSensorDto } from '@hlutir/common';

@Controller('sensors')
export class SensorsController {
    constructor(private readonly sensorsService: SensorsService) { }

    @Post()
    create(@Body() data: ICreateSensorDto): Promise<ISensor> {
        return this.sensorsService.create(data);
    }

    @Get()
    findAll(): Promise<ISensor[]> {
        return this.sensorsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<ISensor> {
        return this.sensorsService.findOne(Number(id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: IUpdateSensorDto): Promise<ISensor> {
        return this.sensorsService.update(Number(id), data);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<ISensor> {
        return this.sensorsService.remove(Number(id));
    }
}
