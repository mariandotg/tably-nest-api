import { Test, TestingModule } from '@nestjs/testing';
import { TabGroupsService } from './tab-groups.service';

describe('TabGroupsService', () => {
  let service: TabGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabGroupsService],
    }).compile();

    service = module.get<TabGroupsService>(TabGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
