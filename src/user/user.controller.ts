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
import { UserService } from './user.service'; 
import { User} from '@prisma/client';
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() data:  User) {
    return this.userService.createUser(data);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const userFound = await this.userService.getUserById(+id);
    if (!userFound) throw new NotFoundException('User do not exist');
    return userFound;
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: User) {
    try {
      return await this.userService.updateUser(+id, data);
    } catch (error) {
      throw new NotFoundException('User do not exist');
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    try {
      return await this.userService.deleteUser(+id);
    } catch (error) {
      throw new NotFoundException('User do not exist');
    }
  }
}
