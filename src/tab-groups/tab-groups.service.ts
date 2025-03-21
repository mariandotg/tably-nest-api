import { Injectable } from '@nestjs/common';
import { TabGroupsRepository } from './tab-groups.repository';
import { TabGroup } from './entities/tab-groups.entity';

@Injectable()
export class TabGroupsService {
  constructor(private readonly tabGroupsRepository: TabGroupsRepository) {}

  async getTabGroupsByUserId(userId: number): Promise<TabGroup[]> {
    const tabGroups =
      await this.tabGroupsRepository.getTabGroupsByUserId(userId);
    return tabGroups;
  }

  async createTabGroup(userId: number, name: string): Promise<TabGroup> {
    const tabGroup = await this.tabGroupsRepository.createTabGroup(
      userId,
      name,
    );
    return tabGroup;
  }

  hello(): string {
    return 'hola mundo!';
  }
}
