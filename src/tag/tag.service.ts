import { Injectable } from '@nestjs/common';
import { Tag } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async getAllTags(): Promise<Tag[]> {
    return this.prisma.tag.findMany();
  }

  async getTagById(id: number): Promise<Tag> {
    return this.prisma.tag.findUnique({
      where: {
        id,
      },
    });
  }

  async createTag(data: Tag): Promise<Tag> {
    return this.prisma.tag.create({
      data,
    });
  }

  async updateTag(id: number, data: Tag): Promise<Tag> {
    return this.prisma.tag.update({ 
      where: { 
        id }, 
        data 
      });
  }

  async deleteTag(id: number): Promise<Tag> {
    return this.prisma.tag.delete(
      {where:{
        id}
      }
    );
  }
}
