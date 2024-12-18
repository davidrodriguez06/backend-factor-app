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
import { AuthenticationService } from './authentication.service';
import { Authentication} from '@prisma/client';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
@ApiTags('authentication')
@Controller('api/authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post()
  async createAuthentication(@Body() data:  Authentication) {
    return this.authenticationService.createAuthentication(data);
  }

  @Get()
  async getAllAuthentications() {
    return this.authenticationService.getAllAuthentications();
  }

  @Get(':id')
  async getAuthenticationById(@Param('id') id: string) {
    const authenticationFound = await this.authenticationService.getAuthenticationById(+id);
    if (!authenticationFound) throw new NotFoundException('Authentication do not exist');
    return authenticationFound;
  }

  @Put(':id')
  async updateAuthentication(@Param('id') id: string, @Body() data: Authentication) {
    try {
      return await this.authenticationService.updateAuthentication(+id, data);
    } catch (error) {
      throw new NotFoundException('Authentication do not exist');
    }
  }

  @Delete(':id')
  async deleteAuthentication(@Param('id') id: string) {
    try {
      return await this.authenticationService.deleteAuthentication(+id);
    } catch (error) {
      throw new NotFoundException('Authentication do not exist');
    }
  }
}
