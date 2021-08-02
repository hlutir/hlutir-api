import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseSvcModule } from '@hlutir/common';

@Module({
  imports: [
    UsersModule,
    DatabaseSvcModule.register()
  ],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule {}
