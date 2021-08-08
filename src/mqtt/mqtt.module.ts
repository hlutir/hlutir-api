import { Module } from '@nestjs/common';
import { MicroserviceModule, MqttService } from '@hlutir/common';
import { MqttController } from './mqtt.controller';

@Module({
  imports: [MicroserviceModule.register()],
  controllers: [MqttController],
  providers: [MqttService]
})
export class MqttModule {}
