import { TabGroup } from '../entities/tab-groups.entity';

export interface ITabGroupRepository {
  getTabGroupsByUserId(userId: number): Promise<TabGroup[]>;
}
