import { Module } from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { SensorsController } from './sensors.controller';
import { PrismaService } from '../prisma.service';
import { DatapointsService } from '../datapoints/datapoints.service';

@Module({
  controllers: [SensorsController],
  providers: [SensorsService, DatapointsService, PrismaService]
})
export class SensorsModule {}
