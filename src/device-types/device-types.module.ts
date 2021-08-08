import { Module } from '@nestjs/common';
import { MicroserviceModule, DeviceTypesService } from '@hlutir/common';
import { DeviceTypesController } from './device-types.controller';

@Module({
    imports: [MicroserviceModule.register()],
    controllers: [DeviceTypesController],
    providers: [DeviceTypesService]
})
export class DeviceTypesModule {}
