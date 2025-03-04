import { Module } from '@nestjs/common';
import { DatabaseModule } from '../db/database.module';
import { TabGroupsService } from './tab-groups.service';
import { TabGroupsController } from './tab-groups.controller';
import { TabGroupsRepository } from './tab-groups.repository';

@Module({
  imports: [DatabaseModule],
  providers: [TabGroupsService, TabGroupsRepository],
  exports: [TabGroupsService],
  controllers: [TabGroupsController],
})
export class TabGroupsModule {}
