import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MicroserviceModule, UsersService } from '@hlutir/common';
@Module({
  imports: [MicroserviceModule.register()],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
