import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeviceType } from '@prisma/client';
import { DeviceTypesService } from './device-types.service';
import { CreateDeviceTypeDto } from './dto/create-device-type.dto';
import { UpdateDeviceTypeDto } from './dto/update-device-type.dto';

@ApiTags('device-types')
@Controller('device-types')
export class DeviceTypesController {
  constructor(private readonly deviceTypesService: DeviceTypesService) {}

  @Post()
  @ApiOperation({ summary: 'Create device type' })
  async create(@Body() createDeviceTypeDto: CreateDeviceTypeDto): Promise<DeviceType> {
    return this.deviceTypesService.create(createDeviceTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all device types' })
  async findAll(): Promise<DeviceType[]> {
    return this.deviceTypesService.findAll({});
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a device type' })
  async findOne(@Param('id') id: string): Promise<DeviceType> {
    return this.deviceTypesService.findOne({
      deviceTypeID: Number(id)
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a device type' })
  async remove(@Param('id') id: string): Promise<DeviceType> {
    return this.deviceTypesService.remove({
      deviceTypeID: Number(id)
    });
  }
}
