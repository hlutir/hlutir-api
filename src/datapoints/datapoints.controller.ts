import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatapointsService, ICreateDatapointDto, IDatapoint, IUpdateDatapointDto } from '@hlutir/common';

@Controller('datapoints')
export class DatapointsController {
    constructor(private readonly datapointsService: DatapointsService) { }

    @Post()
    create(@Body() data: ICreateDatapointDto): Promise<IDatapoint> {
        return this.datapointsService.create(data);
    }

    @Get()
    findAll(): Promise<IDatapoint[]> {
        return this.datapointsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<IDatapoint> {
        return this.datapointsService.findOne(Number(id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: IUpdateDatapointDto): Promise<IDatapoint> {
        return this.datapointsService.update(Number(id), data);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<IDatapoint> {
        return this.datapointsService.remove(Number(id));
    }
}
