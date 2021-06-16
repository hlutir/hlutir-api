import { Module } from '@nestjs/common';
import { DeviceTypesService } from './device-types.service';
import { DeviceTypesController } from './device-types.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [DeviceTypesController],
  providers: [DeviceTypesService, PrismaService]
})
export class DeviceTypesModule {}
