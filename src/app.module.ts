import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseSvcModule } from '@hlutir/common';
import { DeviceTypesModule } from './device-types/device-types.module';
import { SensorsModule } from './sensors/sensors.module';
import { DatapointsModule } from './datapoints/datapoints.module';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [
    UsersModule,
    DatabaseSvcModule.register(),
    DeviceTypesModule,
    SensorsModule,
    DatapointsModule,
    DevicesModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule {}
