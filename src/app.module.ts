import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { DeviceTypesModule } from './device-types/device-types.module';
import { DevicesModule } from './devices/devices.module';
import { DatapointsModule } from './datapoints/datapoints.module';

@Module({
  imports: [DeviceTypesModule, DevicesModule, DatapointsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}