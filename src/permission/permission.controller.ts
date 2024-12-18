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
import { PermissionService } from './permission.service'; 
import { Permission} from '@prisma/client';
@Controller('api/permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  async createPermission(@Body() data:  Permission) {
    return this.permissionService.createPermission(data);
  }

  @Get()
  async getAllPermissions() {
    return this.permissionService.getAllPermissions();
  }

  @Get(':id')
  async getPermissionById(@Param('id') id: string) {
    const permissionFound = await this.permissionService.getPermissionById(+id);
    if (!permissionFound) throw new NotFoundException('Permission do not exist');
    return permissionFound;
  }

  @Put(':id')
  async updatePermission(@Param('id') id: string, @Body() data: Permission) {
    try {
      return await this.permissionService.updatePermission(+id, data);
    } catch (error) {
      throw new NotFoundException('Permission do not exist');
    }
  }

  @Delete(':id')
  async deletePermission(@Param('id') id: string) {
    try {
      return await this.permissionService.deletePermission(+id);
    } catch (error) {
      throw new NotFoundException('Permission do not exist');
    }
  }
}
