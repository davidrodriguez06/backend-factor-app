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
import { BannerService } from './banner.service';
import { Banner } from '@prisma/client';

@Controller('api/banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}
  @Post()
  async createBanner(@Body() data: Banner) {
    return this.bannerService.createBanner(data);
  }

  @Get()
  async getAllBanners() {
    return this.bannerService.getAllBanners();
  }

  @Get(':id')
  async getBannerById(@Param('id') id: string) {
    const bannerFound = await this.bannerService.getBannerById(+id);
    if (!bannerFound) throw new NotFoundException('Banner do not exist');
    return bannerFound;
  }

  @Put(':id')
  async updateBanner(@Param('id') id: string, @Body() data: Banner) {
    try {
      return await this.bannerService.updateBanner(+id, data);
    } catch (error) {
      throw new NotFoundException('Banner do not exist');
    }
  }

  @Delete(':id')
  async deleteBanner(@Param('id') id: string) {
    try {
      return await this.bannerService.deleteBanner(+id);
    } catch (error) {
      throw new NotFoundException('Banner do not exist');
    }
  }
}
