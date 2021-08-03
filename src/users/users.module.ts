import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { DatabaseSvcModule, UsersService } from '@hlutir/common';
@Module({
  imports: [DatabaseSvcModule.register()],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
