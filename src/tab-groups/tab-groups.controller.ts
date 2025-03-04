import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { TabGroupsService } from './tab-groups.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

interface RequestWithUser extends Request {
  user: {
    userId: number;
    email: string;
  };
}

@Controller('tab-groups')
@UseGuards(JwtAuthGuard)
export class TabGroupsController {
  constructor(private readonly tabGroupsService: TabGroupsService) {}

  @Get()
  getTabGroupsByUserId(@Request() req: RequestWithUser) {
    return this.tabGroupsService.getTabGroupsByUserId(req.user.userId);
  }
}
