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
import { NewsService } from './news.service'; 
import { News} from '@prisma/client';
@Controller('api/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  async createNews(@Body() data:  News) {
    return this.newsService.createNews(data);
  }

  @Get()
  async getAllNewss() {
    return this.newsService.getAllNewss();
  }

  @Get(':id')
  async getNewsById(@Param('id') id: string) {
    const newsFound = await this.newsService.getNewsById(+id);
    if (!newsFound) throw new NotFoundException('News do not exist');
    return newsFound;
  }

  @Put(':id')
  async updateNews(@Param('id') id: string, @Body() data:News) {
    try {
      return await this.newsService.updateNews(+id, data);
    } catch (error) {
      throw new NotFoundException('News do not exist');
    }
  }

  @Delete(':id')
  async deleteNews(@Param('id') id: string) {
    try {
      return await this.newsService.deleteNews(+id);
    } catch (error) {
      throw new NotFoundException('News do not exist');
    }
  }
}
