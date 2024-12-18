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
import { ContestService } from './contest.service'; 
import { Contest} from '@prisma/client';
@Controller('api/contest')
export class ContestController {
  constructor(private readonly contestService: ContestService) {}

  @Post()
  async createContest(@Body() data:  Contest) {
    return this.contestService.createContest(data);
  }

  @Get()
  async getAllContests() {
    return this.contestService.getAllContests();
  }

  @Get(':id')
  async getContestById(@Param('id') id: string) {
    const contestFound = await this.contestService.getContestById(+id);
    if (!contestFound) throw new NotFoundException('Contest do not exist');
    return contestFound;
  }

  @Put(':id')
  async updateContest(@Param('id') id: string, @Body() data: Contest) {
    try {
      return await this.contestService.updateContest(+id, data);
    } catch (error) {
      throw new NotFoundException('Contest do not exist');
    }
  }

  @Delete(':id')
  async deleteContest(@Param('id') id: string) {
    try {
      return await this.contestService.deleteContest(+id);
    } catch (error) {
      throw new NotFoundException('Contest do not exist');
    }
  }
}
