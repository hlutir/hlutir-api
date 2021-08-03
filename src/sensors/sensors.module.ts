import { Module } from '@nestjs/common';
import { DatabaseSvcModule, SensorsService } from '@hlutir/common';
import { SensorsController } from './sensors.controller';

@Module({
  imports: [DatabaseSvcModule.register()],
  controllers: [SensorsController],
  providers: [SensorsService]
})
export class SensorsModule {}
