import { Injectable } from '@nestjs/common';
import { Group} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async getAllGroups(): Promise<Group[]> {
    return this.prisma.group.findMany();
  }

  async getGroupById(id: number): Promise<Group> {
    return this.prisma.group.findUnique({
      where: {
        id,
      },
    });
  }

  async createGroup(data: Group): Promise<Group> {
    return this.prisma.group.create({
      data,
    });
  }

  async updateGroup(id: number, data: Group): Promise<Group> {
    return this.prisma.group.update({ 
      where: { 
        id }, 
        data 
      });
  }

  async deleteGroup(id: number): Promise<Group> {
    return this.prisma.group.delete(
      {where:{
        id}
      }
    );
  }
}
