import { Module } from '@nestjs/common';
import { MicroserviceModule, DatapointsService } from '@hlutir/common';
import { DatapointsController } from './datapoints.controller';

@Module({
  imports: [MicroserviceModule.register()],
  controllers: [DatapointsController],
  providers: [DatapointsService]
})
export class DatapointsModule {}
