import { Injectable } from '@nestjs/common';
import { News } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async getAllNewss(): Promise<News[]> {
    return this.prisma.news.findMany();
  }

  async getNewsById(id: number): Promise<News> {
    return this.prisma.news.findUnique({
      where: {
        id,
      },
    });
  }

  async createNews(data: News): Promise<News> {
    return this.prisma.news.create({
      data,
    });
  }

  async updateNews(id: number, data: News): Promise<News> {
    return this.prisma.news.update({ 
      where: { 
        id }, 
        data 
      });
  }

  async deleteNews(id: number): Promise<News> {
    return this.prisma.news.delete(
      {where:{
        id}
      }
    );
  }
}
