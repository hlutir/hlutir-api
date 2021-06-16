import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatapointsService } from './datapoints.service';
import { CreateDatapointDto } from './dto/create-datapoint.dto';
import { UpdateDatapointDto } from './dto/update-datapoint.dto';

@Controller('datapoints')
export class DatapointsController {
  constructor(private readonly datapointsService: DatapointsService) {}

  @Post()
  create(@Body() createDatapointDto: CreateDatapointDto) {
    return this.datapointsService.create(createDatapointDto);
  }

  @Get()
  findAll() {
    return this.datapointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datapointsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatapointDto: UpdateDatapointDto) {
    return this.datapointsService.update(+id, updateDatapointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datapointsService.remove(+id);
  }
}
