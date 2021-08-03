import { Module } from '@nestjs/common';
import { DatabaseSvcModule, DevicesService } from '@hlutir/common';
import { DevicesController } from './devices.controller';

@Module({
  imports: [DatabaseSvcModule.register()],
  controllers: [DevicesController],
  providers: [DevicesService]
})
export class DevicesModule {}
