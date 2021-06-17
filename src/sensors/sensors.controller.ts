import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Sensor } from '@prisma/client';

@ApiTags('sensors')
@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create sensor' })
  async create(@Body() createSensorDto: CreateSensorDto): Promise<Sensor> {
    return this.sensorsService.create(createSensorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sensors' })
  async findAll(): Promise<Sensor[]> {
    return this.sensorsService.findAll({});
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a sensor' })
  async findOne(@Param('id') id: string): Promise<Sensor> {
    return this.sensorsService.findOne({
      sensorID: Number(id)
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a sensor' })
  async remove(@Param('id') id: string): Promise<Sensor> {
    return this.sensorsService.remove({
      sensorID: Number(id)
    });
  }
}
