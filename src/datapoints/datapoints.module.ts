import { Module } from '@nestjs/common';
import { DatapointsService } from './datapoints.service';
import { DatapointsController } from './datapoints.controller';

@Module({
  controllers: [DatapointsController],
  providers: [DatapointsService]
})
export class DatapointsModule {}
