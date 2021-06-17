import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Datapoint } from '@prisma/client';
import { DatapointsService } from './datapoints.service';
import { CreateDatapointDto } from './dto/create-datapoint.dto';
import { UpdateDatapointDto } from './dto/update-datapoint.dto';

@ApiTags('datapoints')
@Controller('datapoints')
export class DatapointsController {
  constructor(private readonly datapointsService: DatapointsService) {}

  @Post()
  @ApiOperation({ summary: 'Create datapoint' })
  async create(@Body() createDatapointDto: CreateDatapointDto): Promise<Datapoint> {
    return this.datapointsService.create(createDatapointDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all datapoints' })
  async findAll(): Promise<Datapoint[]> {
    return this.datapointsService.findAll({});
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a datapoint' })
  async findOne(@Param('id') id: string): Promise<Datapoint> {
    return this.datapointsService.findOne({
      datapointID: Number(id)
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a datapoint' })
  async remove(@Param('id') id: string): Promise<Datapoint> {
    return this.datapointsService.remove({
      datapointID: Number(id)
    });
  }
}
