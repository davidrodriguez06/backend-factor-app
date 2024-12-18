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
import { MultimediaService } from './multimedia.service'; 
import { Multimedia} from '@prisma/client';
@Controller('api/multimedia')
export class MultimediaController {
  constructor(private readonly multimediaService: MultimediaService) {}

  @Post()
  async createMultimedia(@Body() data:  Multimedia) {
    return this.multimediaService.createMultimedia(data);
  }

  @Get()
  async getAllMultimedias() {
    return this.multimediaService.getAllMultimedias();
  }

  @Get(':id')
  async getMultimediaById(@Param('id') id: string) {
    const multimediaFound = await this.multimediaService.getMultimediaById(+id);
    if (!multimediaFound) throw new NotFoundException('Multimedia do not exist');
    return multimediaFound;
  }

  @Put(':id')
  async updateMultimedia(@Param('id') id: string, @Body() data: Multimedia) {
    try {
      return await this.multimediaService.updateMultimedia(+id, data);
    } catch (error) {
      throw new NotFoundException('Multimedia do not exist');
    }
  }

  @Delete(':id')
  async deleteMultimedia(@Param('id') id: string) {
    try {
      return await this.multimediaService.deleteMultimedia(+id);
    } catch (error) {
      throw new NotFoundException('Multimedia do not exist');
    }
  }
}
