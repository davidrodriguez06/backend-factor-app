import { Injectable } from '@nestjs/common';
import { Multimedia } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MultimediaService {
  constructor(private prisma: PrismaService) {}

  async getAllMultimedias(): Promise<Multimedia[]> {
    return this.prisma.multimedia.findMany();
  }

  async getMultimediaById(id: number): Promise<Multimedia> {
    return this.prisma.multimedia.findUnique({
      where: {
        id,
      },
    });
  }

  async createMultimedia(data: Multimedia): Promise<Multimedia> {
    return this.prisma.multimedia.create({
      data,
    });
  }

  async updateMultimedia(id: number, data: Multimedia): Promise<Multimedia> {
    return this.prisma.multimedia.update({ 
      where: { 
        id }, 
        data 
      });
  }

  async deleteMultimedia(id: number): Promise<Multimedia> {
    return this.prisma.multimedia.delete(
      {where:{
        id}
      }
    );
  }
}