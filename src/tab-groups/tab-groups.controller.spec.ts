import { Test, TestingModule } from '@nestjs/testing';
import { TabGroupsController } from './tab-groups.controller';

describe('TabGroupsController', () => {
  let controller: TabGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabGroupsController],
    }).compile();

    controller = module.get<TabGroupsController>(TabGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
