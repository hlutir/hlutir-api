import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceType } from '@prisma/client';
import { DeviceTypesService } from './device-types.service';
import { CreateDeviceTypeDto } from './dto/create-device-type.dto';
import { UpdateDeviceTypeDto } from './dto/update-device-type.dto';

@Controller('device-types')
export class DeviceTypesController {
  constructor(private readonly deviceTypesService: DeviceTypesService) {}

  @Post()
  async create(@Body() createDeviceTypeDto: CreateDeviceTypeDto): Promise<DeviceType> {
    return this.deviceTypesService.create(createDeviceTypeDto);
  }

  @Get()
  async findAll(): Promise<DeviceType[]> {
    return this.deviceTypesService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DeviceType> {
    return this.deviceTypesService.findOne({
      deviceTypeID: Number(id)
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeviceType> {
    return this.deviceTypesService.remove({
      deviceTypeID: Number(id)
    });
  }
}
