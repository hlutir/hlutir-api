import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceTypesService, ICreateDeviceTypeDto, IDeviceType, IUpdateDeviceTypeDto } from '@hlutir/common';

@Controller('device-types')
export class DeviceTypesController {
  constructor(private readonly deviceTypesService: DeviceTypesService) {}

  @Post()
  create(@Body() data: ICreateDeviceTypeDto): Promise<IDeviceType> {
    return this.deviceTypesService.create(data);
  }

  @Get()
  findAll(): Promise<IDeviceType[]> {
    return this.deviceTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IDeviceType> {
    return this.deviceTypesService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: IUpdateDeviceTypeDto): Promise<IDeviceType> {
    return this.deviceTypesService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<IDeviceType> {
    return this.deviceTypesService.remove(Number(id));
  }
}
