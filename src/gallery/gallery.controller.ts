import { Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,} from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { Gallery } from '@prisma/client';

@Controller('api/gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post()
  async createGallery(@Body() data:  Gallery) {
    return this.galleryService.createGallery(data);
  }

  @Get()
  async getAllGallerys() {
    return this.galleryService.getAllGallery();
  }

  @Get(':id')
  async getGalleryById(@Param('id') id: string) {
    const galleryFound = await this.galleryService.getGalleryById(+id);
    if (!galleryFound) throw new NotFoundException('Gallery do not exist');
    return galleryFound;
  }

  @Put(':id')
  async updateGallery(@Param('id') id: string, @Body() data: Gallery) {
    try {
      return await this.galleryService.updateGallery(+id, data);
    } catch (error) {
      throw new NotFoundException('Gallery do not exist');
    }
  }

  @Delete(':id')
  async deleteGallery(@Param('id') id: string) {
    try {
      return await this.galleryService.deleteGallery(+id);
    } catch (error) {
      throw new NotFoundException('Gallery do not exist');
    }
  }
}
