import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
} from '@nestjs/common';
import { TabGroupsService } from './tab-groups.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BodyDTO } from './dto/create-tab-group-request-body.dto';

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

  @Post()
  createTabGroup(@Request() req: RequestWithUser, @Body() bodyDto: BodyDTO) {
    return this.tabGroupsService.createTabGroup(req.user.userId, bodyDto.name);
  }
}
