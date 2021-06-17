import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Device } from '@prisma/client';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@ApiTags('devices')
@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  @ApiOperation({ summary: 'Create device' })
  async create(@Body() createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.devicesService.create(createDeviceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all devices' })
  async findAll(): Promise<Device[]> {
    return this.devicesService.findAll({});
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a device' })
  async findOne(@Param('id') id: string): Promise<Device> {
    return this.devicesService.findOne({
      deviceID: Number(id)
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a device' })
  async remove(@Param('id') id: string): Promise<Device> {
    return this.devicesService.remove({
      deviceID: Number(id)
    });
  }
}
