import { Module } from '@nestjs/common';
import { DatabaseSvcModule, DeviceTypesService } from '@hlutir/common';
import { DeviceTypesController } from './device-types.controller';

@Module({
    imports: [DatabaseSvcModule.register()],
    controllers: [DeviceTypesController],
    providers: [DeviceTypesService]
})
export class DeviceTypesModule {}
