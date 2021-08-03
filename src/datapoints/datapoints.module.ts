import { Module } from '@nestjs/common';
import { DatabaseSvcModule, DatapointsService } from '@hlutir/common';
import { DatapointsController } from './datapoints.controller';

@Module({
  imports: [DatabaseSvcModule.register()],
  controllers: [DatapointsController],
  providers: [DatapointsService]
})
export class DatapointsModule {}
