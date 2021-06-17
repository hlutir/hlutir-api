import { Module } from '@nestjs/common';
import { DatapointsService } from './datapoints.service';
import { DatapointsController } from './datapoints.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [DatapointsController],
  providers: [DatapointsService, PrismaService]
})
export class DatapointsModule {}
