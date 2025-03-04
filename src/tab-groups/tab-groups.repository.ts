import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { TabGroup } from './entities/tab-groups.entity';
import { ITabGroupRepository } from './interfaces/tab-groups.interface';
import { tabGroups, tabGroupPages, pages } from '../db/schema';
import { eq } from 'drizzle-orm';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TabGroupsRepository implements ITabGroupRepository {
  constructor(@Inject('DB') private readonly db: NodePgDatabase) {}

  async getTabGroupsByUserId(userId: number): Promise<TabGroup[]> {
    const results = await this.db
      .select({
        tabGroup: tabGroups,
        page: pages,
      })
      .from(tabGroups)
      .leftJoin(tabGroupPages, eq(tabGroups.id, tabGroupPages.tabGroupId))
      .leftJoin(pages, eq(tabGroupPages.pageId, pages.id))
      .where(eq(tabGroups.userId, userId));

    // Group results by tab group and organize pages
    const tabGroupMap = results.reduce((acc, row) => {
      if (!acc.has(row.tabGroup.id)) {
        acc.set(row.tabGroup.id, {
          ...row.tabGroup,
          pages: [],
        });
      }

      if (row.page) {
        acc.get(row.tabGroup.id)?.pages.push(row.page);
      }

      return acc;
    }, new Map<number, TabGroup>());

    return Array.from(tabGroupMap.values());
  }
}
