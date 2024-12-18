import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Banner } from '@prisma/client';

@Injectable()
export class BannerService {
  constructor(private prisma: PrismaService) {}
  async getAllBanners(): Promise<Banner[]> {
    return this.prisma.banner.findMany();
  }

  async getBannerById(id: number): Promise<Banner> {
    return this.prisma.banner.findUnique({
      where: {
        id,
      },
    });
  }

  async createBanner(data: Banner): Promise<Banner> {
    return this.prisma.banner.create({
      data,
    });
  }

  async updateBanner(id: number, data: Banner): Promise<Banner> {
    return this.prisma.banner.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteBanner(id: number): Promise<Banner> {
    return this.prisma.banner.delete({
      where: {
        id,
      },
    });
  }
}
