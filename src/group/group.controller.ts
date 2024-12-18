import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { Group} from '@prisma/client';
@Controller('api/group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async createGroup(@Body() data:  Group) {
    return this.groupService.createGroup(data);
  }

  @Get()
  async getAllGroups() {
    return this.groupService.getAllGroups();
  }

  @Get(':id')
  async getGroupById(@Param('id') id: string) {
    const groupFound = await this.groupService.getGroupById(+id);
    if (!groupFound) throw new NotFoundException('Group do not exist');
    return groupFound;
  }

  @Put(':id')
  async updateGroup(@Param('id') id: string, @Body() data: Group) {
    try {
      return await this.groupService.updateGroup(+id, data);
    } catch (error) {
      throw new NotFoundException('Group do not exist');
    }
  }

  @Delete(':id')
  async deleteGroup(@Param('id') id: string) {
    try {
      return await this.groupService.deleteGroup(+id);
    } catch (error) {
      throw new NotFoundException('Group do not exist');
    }
  }
}
