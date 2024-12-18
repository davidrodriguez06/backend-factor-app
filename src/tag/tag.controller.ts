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
import { TagService } from './tag.service'; 
import { Tag} from '@prisma/client';
@Controller('api/tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  async createTag(@Body() data:  Tag) {
    return this.tagService.createTag(data);
  }

  @Get()
  async getAllTags() {
    return this.tagService.getAllTags();
  }

  @Get(':id')
  async getTagById(@Param('id') id: string) {
    const tagFound = await this.tagService.getTagById(+id);
    if (!tagFound) throw new NotFoundException('Tag do not exist');
    return tagFound;
  }

  @Put(':id')
  async updateTag(@Param('id') id: string, @Body() data: Tag) {
    try {
      return await this.tagService.updateTag(+id, data);
    } catch (error) {
      throw new NotFoundException('Tag do not exist');
    }
  }

  @Delete(':id')
  async deleteTag(@Param('id') id: string) {
    try {
      return await this.tagService.deleteTag(+id);
    } catch (error) {
      throw new NotFoundException('Tag do not exist');
    }
  }
}
