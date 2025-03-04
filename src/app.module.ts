import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/database.module';
import { AuthModule } from './auth/auth.module';
import { TabGroupsModule } from './tab-groups/tab-groups.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    TabGroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
