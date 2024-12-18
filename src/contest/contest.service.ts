import { Injectable } from '@nestjs/common';
import { Contest } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContestService {
  constructor(private prisma: PrismaService) {}

  async getAllContests(): Promise<Contest[]> {
    return this.prisma.contest.findMany();
  }

  async getContestById(id: number): Promise<Contest> {
    return this.prisma.contest.findUnique({
      where: {
        id,
      },
    });
  }

  async createContest(data: Contest): Promise<Contest> {
    return this.prisma.contest.create({
      data,
    });
  }

  async updateContest(id: number, data: Contest): Promise<Contest> {
    return this.prisma.contest.update({ 
      where: { 
        id }, 
        data 
      });
  }

  async deleteContest(id: number): Promise<Contest> {
    return this.prisma.contest.delete(
      {where:{
        id}
      }
    );
  }
}
