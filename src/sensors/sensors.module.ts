import { Module } from '@nestjs/common';
import { MicroserviceModule, SensorsService } from '@hlutir/common';
import { SensorsController } from './sensors.controller';

@Module({
  imports: [MicroserviceModule.register()],
  controllers: [SensorsController],
  providers: [SensorsService]
})
export class SensorsModule {}
