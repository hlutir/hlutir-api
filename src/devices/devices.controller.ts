import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevicesService, ICreateDeviceDto, IDevice, IUpdateDeviceDto } from '@hlutir/common';

@Controller('devices')
export class DevicesController {
    constructor(private readonly devicesService: DevicesService) { }

    @Post()
    create(@Body() data: ICreateDeviceDto): Promise<IDevice> {
        return this.devicesService.create(data);
    }

    @Get()
    findAll(): Promise<IDevice[]> {
        return this.devicesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<IDevice> {
        return this.devicesService.findOne(Number(id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: IUpdateDeviceDto): Promise<IDevice> {
        return this.devicesService.update(Number(id), data);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<IDevice> {
        return this.devicesService.remove(Number(id));
    }
}
