import { Module } from '@nestjs/common';
import { MicroserviceModule, DevicesService } from '@hlutir/common';
import { DevicesController } from './devices.controller';

@Module({
  imports: [MicroserviceModule.register()],
  controllers: [DevicesController],
  providers: [DevicesService]
})
export class DevicesModule {}
