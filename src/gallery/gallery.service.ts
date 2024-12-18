import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Gallery } from '@prisma/client';

@Injectable()
export class GalleryService {

  constructor(private prisma: PrismaService) {}

  async getAllGallery(): Promise<Gallery[]> {
    return this.prisma.gallery.findMany();
  }

  async getGalleryById(id: number): Promise<Gallery> {
    return this.prisma.gallery.findUnique({
      where: {
        id,
      },
    });
  }

  async createGallery(data: Gallery): Promise<Gallery> {
    return this.prisma.gallery.create({
      data,
    });
  }

  async updateGallery(id: number, data: Gallery): Promise<Gallery> {
    return this.prisma.gallery.update({ 
      where: { 
        id }, 
        data 
      });
  }

  async deleteGallery(id: number): Promise<Gallery> {
    return this.prisma.gallery.delete(
      {where:{
        id}
      }
    );
  }
}
