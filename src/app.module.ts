import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MicroserviceModule } from '@hlutir/common';
import { DeviceTypesModule } from './device-types/device-types.module';
import { SensorsModule } from './sensors/sensors.module';
import { DatapointsModule } from './datapoints/datapoints.module';
import { DevicesModule } from './devices/devices.module';
import { MqttModule } from './mqtt/mqtt.module';

@Module({
  imports: [
    UsersModule,
    MicroserviceModule.register(),
    DeviceTypesModule,
    SensorsModule,
    DatapointsModule,
    DevicesModule,
    MqttModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule {}
